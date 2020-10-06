module.exports = [
    [
        'vuepress-plugin-mygitalk', {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 是否开启首页评论(default: true)
            home: false,
            // Gitalk配置
            gitalk: {
                // GitHub Application Client ID.
                clientID: '35a6515726aebec085c1',
                // GitHub Application Client Secret.
                clientSecret: '910e725a7475c15cd343aef75df6731ff416de0f',
                // GitHub repository. 存储评论的 repo
                repo: 'blog',
                // GitHub repository 所有者，可以是个人或者组织。
                owner: 'leochenup',
                // GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。(不配置默认是owner配置)
                admin: ['leochenup'],
                // 设置语言(default: zh-CN)
                language: 'zh-CN',
            }
        },
    ],
    ['@vuepress/medium-zoom', {
        selector: '.theme-reco-content:not(a)>img',
        options: {
        }
    }],
]