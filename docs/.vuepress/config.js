module.exports = {
    base: '/',
    port: 8081,
    title: '老秦',
    description: '老秦',
    markdown: {
        lineNumbers: false // 每个代码块是否显示行号
    },
    head: [
        ['link', { rel: 'icon', href: '/image/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/image/haha.jpg',
        lastUpdated: '上次更新时间', // 最后更新时间
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'qinzhiyuan9527/qinzhiyuan9527.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
            { text: '文章', link: '/article/user' },
            { text: 'Guide', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/qinzhiyuan9527/qinzhiyuan9527.github.io' },
            { text: '语雀', link: 'https://www.yuque.com/qinchuyia/sysshk' }
        ],
        sidebar: [
            {
                title: '面试总结',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    '/article/user',
                ]
            },
            {
                title: '学习Vue',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/article/vueCli', // /vue/就相当于 /vue/README.md .md 可以省略
                    '/article/vueRouter',
                ]
            }
        ]
    }
}