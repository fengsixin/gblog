import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: '冯思昕', // 请替换为您的姓名
    url: 'https://fsx.tianran.site', // 请替换为您的博客URL
    title: '风似心在飞', // 请替换为您的博客标题
    description: '中年大叔天天折腾的小园地^_^', // 请替换为您的博客描述
    shortDescription: '总要留点什么！',
}

export const NavigationLinks: NavigationLink[] = [
    { name: '文章', url: '/posts/' },
    { name: '分类', url: '/categories/' },
    { name: '时间线', url: '/timeline/' },
    { name: '关于', url: '/about/' }, // 我们将创建一个单独的about页面
    { name: '友链', url: '/friends/' },
]

export const FooterLinks = [
    {
        section: '博客',
        links: [
            { name: '文章', url: '/posts/' },
            { name: '时间线', url: '/timeline/' },
            { name: '分类', url: '/categories/' },
            { name: '关于我', url: '/about/' },
        ],
    },
    {
        section: '其他',
        links: [
            { name: 'RSS', url: '/rss.xml' },
            { name: '站点地图', url: '/sitemap-index.xml' },
            { name: 'GitHub', url: 'https://github.com/fengsixin' },
        ],
    },
]

export const Settings = {
    GoogleAnalytics: {
        enable: false, // 暂时禁用，您可以根据需要启用
        id: 'YOUR-GA-ID', // 请替换为您的Google Analytics ID
    },

    // See https://github.com/umami-software/umami
    UmamiAnalytics: {
        enable: false, // 暂时禁用，您可以根据需要启用
        dataWebsiteID: 'YOUR-UMAMI-ID', // 请替换为您的Umami ID
    },

    Comment: {
        // Please note that the environment value here is `string` type on Cloudflare Pages
        // If you want to disable the comment system, please delete the `COMMENT_ENABLE` environment variable not just set it to `false`.
        enable: !!(import.meta.env.COMMENT_ENABLE) || !!process.env.COMMENT_ENABLE,

        // please visit https://giscus.app/ to learn how to configure it.
        // You can also check out this article: https://liruifengv.com/posts/add-comments-to-astro/.
        giscus: {
            repo: 'your-username/your-repo', // 请替换为您的GitHub仓库
            repoId: 'YOUR-REPO-ID', // 请替换为您的仓库ID
            category: 'Announcements', // 请替换为您在Giscus中设置的类别
            categoryId: 'YOUR-CATEGORY-ID', // 请替换为您在Giscus中设置的类别ID
            darkThem: 'noborder_gray',
            lightThem: 'light',
        },
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) to anywhere, just set this to false
        // Please note that the environment value here is `string` type on Cloudflare Pages
        // If you want to disable the comment system, please delete the `S3_ENABLE` environment variable not just set it to `false`.
        uploadAssetsToS3: !!(import.meta.env.S3_ENABLE) || !!process.env.S3_ENABLE,
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader,
            // The following configuration will upload the compiled `assets` folder to S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ['assets'],
            endpoint: (process.env.S3_ENDPOINT ?? import.meta.env.S3_ENDPOINT) as string,
            bucket: (process.env.S3_BUCKET ?? import.meta.env.S3_BUCKET) as string,
            accessKey: (process.env.S3_ACCESS_KEY ?? import.meta.env.S3_ACCESS_KEY) as string,
            secretAccessKey: (process.env.S3_SECRET_ACCESS_KEY ?? import.meta.env.S3_SECRET_ACCESS_KEY) as string,
            root: 'gblog',
        },
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'zh-CN', // 如果您的博客是中文的，请使用zh-CN
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
