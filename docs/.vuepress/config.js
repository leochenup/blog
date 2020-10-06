const sideBarConfig = require('./sideBarConfig.js')
const navConfig = require('./navConfig.js')
const friendLinkConfig = require('./friendLinkConfig.js')
const pluginsConfig = require('./plugins')

module.exports = {
    title: 'Leo`s TechStack',
    description: '前端 后端 软件开发 ....',
    logo: '/img/logo.png',
    // markdown: { lineNumbers: true },
    theme: 'reco',
    themeConfig: {
        lastUpdated: '最后更新日期',
        //全局作者设置
        author: 'reco_luan',
        // 博客配置
        nav: navConfig,


        repo: 'leochenup/blog',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑此页',


        //首页
        type: 'blog',
        authorAvatar: '/img/logo.png',
        friendLink: friendLinkConfig,
        //侧边栏
        // displayAllHeaders: true,
        sidebar: sideBarConfig,

        //上一篇下一篇链接
        nextLinks: true,
        prevLinks: true,
        //页面滚动
        smoothScroll: true
    },
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],

    plugins: pluginsConfig,
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    // base: '/blog/'
    base: '/'
}