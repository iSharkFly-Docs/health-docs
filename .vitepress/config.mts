import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ignoreDeadLinks: true,
    srcDir: './docs',
    lang: 'zh-Hans',
    title: "iSharkFly Health 文档",
    description: "iSharkFly - Health",
    head: [
        [
            'script',
            {},
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3NL9V');`
        ]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: 'iSharkFly', link: 'https://www.isharkfly.com'}
        ],
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2025-${new Date().getFullYear()} iSharkFly.Com`
        },
        sidebar: [
            {
                text: 'FHIR',
                collapsed: true,
                link: '/fhir/',
                items: [
                    {text: '简介', link: './introduction', collapsed: true},
                    {text: '开发者眼中的 FHIR', link: './introduction/toreader', collapsed: true},
                    {text: 'FHIR 实现', link: './introduction/fhir-overview', collapsed: true},
                    {text: 'FHIR 开发者指南', link: './introduction/fhir-dev-guide', collapsed: true},
                    {text: '开放数据专题', link: './introduction/open-data-is-coming', collapsed: true},
                ]
            },
            {
                text: 'Mumps', link: '/mumps',collapsed: true,
            },
            {
                text: '术语和参考', link: 'REFERENCE', collapsed: true,
            }
        ],

        socialLinks: [
            {icon: 'git', link: 'https://src.isharkfly.com/iSharkFly-Docs/health-docs.git'}
        ]
    }
})
