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
                    {text: '简介', link: '/fhir/introduction', collapsed: true},
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
            {icon: 'github', link: 'https://github.com/iSharkFly-Docs/docs-isharkfly-com.git'}
        ]
    }
})
