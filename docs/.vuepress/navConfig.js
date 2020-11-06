module.exports = [
    {
        text: 'WebApp', icon: 'reco-api',
        items: [
            { text: '微前端', link: "/microfrontend/" },
            {
                text: '前端',
                items: [
                    { text: 'Styles', link: '/frontend/styles/css/2020-1-21-CSS三大特性' },
                    { text: 'JavaScript', link: '/frontend/javascript/js2' },
                    { text: 'TypeScript', link: '/frontend/typescript/2020-10-6-TypeScript声明文件' },
                    { text: 'BootStrap', link: '/frontend/bootstrap/' },
                    { text: 'Vue', link: '/frontend/vue/2020-5-30-vue常用特性' },
                    { text: 'React', link: '/frontend/react/2020-9-29-React生命周期' },
                    { text: 'WebPack', link: '/frontend/webpack/2020-10-9-开发环境' },
                ]
            },
            {
                text: '后端',
                items: [
                    { text: 'Node', link: '/backend/node/基础模块/02' },
                    { text: 'Express', link: '/backend/express/2020-2-1-express框架' },
                    { text: 'Koa', link: '/backend/koa/' },
                    { text: 'Egg', link: '/backend/egg/' },
                ]
            },
            {
                text: '微信',
                items: [
                    { text: '小程序', link: '/wechat/microapp/' },
                    { text: '公众号', link: '/wechat/publicaccount/' },
                ]
            },
        ]
    },
    {
        text: 'Mobile App', link: '', icon: 'reco-category',
        items: [
            { text: 'Android', link: '/android/2020-10-26-Android布局管理' },
            { text: 'React Native', link: '/reactnative/' },
            { text: 'Flutter', link: '/flutter/' },
        ]
    },
    {
        text: 'Database', icon: 'reco-three',
        items: [
            { text: 'Mysql', link: '/database/mysql/' },
            { text: 'Redis', link: '/database/redis/' },
            { text: 'MongoDB', link: '/database/mongodb/2020-1-20-mongoDB' },
        ]
    },
    {
        text: 'Others', icon: 'reco-other',
        items: [
            {
                text: '计算机基础',
                items: [
                    { text: '数据结构', link: '/computerbase/datastructure/' },
                    { text: '操作系统', link: '/computerbase/os/' },
                    { text: '算法', link: '/computerbase/algorithms/' },
                ]
            },
            {
                text: '技术',
                items: [
                    { text: 'c++', link: '/other/c/2020-9-8-C++基础' },
                    { text: 'java', link: '/other/java/2020-9-8-Java面向对象' },
                    { text: 'php', link: '/other/php/' },
                    { text: 'python', link: '/other/python/' },
                ]
            },
            {
                text: '记录',
                items: [
                    { text: '思路随笔', link: '/记录/思路随笔/2020-2-7-关于李文亮事件' },
                    { text: '零散笔记', link: '/记录/零散笔记/2020-1-28-crud案例知识点总结' },
                    { text: '错误日志', link: '/记录/错误日志/2020-3-5-React-Native-Errors' },
                    { text: '疑问记录', link: '/记录/疑问记录/' }
                ]
            },
        ]
    },
    { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
]