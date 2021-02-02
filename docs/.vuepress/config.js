module.exports = {
    // base: '/docs/',
    base: '/',
    port: 8081,
    title: '老秦',
    description: '老秦',
    markdown: {
        lineNumbers: false, // 每个代码块是否显示行号
    },
    head: [['link', { rel: 'icon', href: '/image/favicon.ico' }]],
    themeConfig: {
        logo: '/image/haha.jpg',
        lastUpdated: '上次更新时间', // 最后更新时间
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'qinzhiyuan9527/docs',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
            {
                text: '学习',
                items: [
                    {
                        text: 'JavaScript',
                        items: [
                            { text: 'Vue', link: '/article/VueBy' },
                            { text: 'ES6', link: '/ES6/array' },
                        ],
                    },
                ],
            },
            { text: 'Guide', link: '/guide/guideBy' },
            { text: 'GitHub', link: 'https://github.com/qinzhiyuan9527' },
            { text: '语雀', link: 'https://www.yuque.com/qinchuyia/sysshk' },
        ],
        sidebar: {
            '/article/': ['VueBy', 'vueCli', 'vueRouter', 'Vuex', 'tongXin', 'VuePress', 'axios'],
            '/ES6/': ['array'],
            '/guide/': ['guideBy'],
            '/': [''],
        },
    },
};
