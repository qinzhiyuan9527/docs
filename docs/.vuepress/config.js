module.exports = {
    base: '/branch/',
    port: 8081,
    title: '老秦',
    description: '老秦',
    markdown: {
        lineNumbers: false // 每个代码块是否显示行号
    },
    themeConfig: {
        logo: '/image/haha.jpg',
        lastUpdated: 'Last Updated', // 最后更新时间
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
                ]
            }
        ]
    }
}