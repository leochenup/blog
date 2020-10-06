module.exports = {
    theme: 'reco',
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        sidebar: [{
            title: 'JavaScrip',
            collapsable: true,
            children: [
                '/frontend/javascript/js2',
                '/frontend/javascript/js3',
                '/frontend/javascript/2020-1-29-code-clean',
                '/frontend/javascript/2020-2-20-formData',
                '/frontend/javascript/2020-9-29-防抖',
            ]
        }]
    },
    plugins: [
        ['@vuepress/medium-zoom', {
            selector: '.theme-reco-content:not(a)>img',
            options: {
            }
        }],
        // [
        //     'vuepress-plugin-mygitalk', {
        //         // 是否启用(关闭请设置为false)(default: true)
        //         enable: true,
        //         // 是否开启首页评论(default: true)
        //         home: false,
        //         // Gitalk配置
        //         gitalk: {
        //             // GitHub Application Client ID.
        //             clientID: '35a6515726aebec085c1',
        //             // GitHub Application Client Secret.
        //             clientSecret: '910e725a7475c15cd343aef75df6731ff416de0f',
        //             // GitHub repository. 存储评论的 repo
        //             repo: 'blog',
        //             // GitHub repository 所有者，可以是个人或者组织。
        //             owner: 'leochenup',
        //             // GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。(不配置默认是owner配置)
        //             admin: ['leochenup'],
        //             // 设置语言(default: zh-CN)
        //             language: 'zh-CN',
        //         }
        //     },
        // ]
    ],
    base: '/blog/'
}  