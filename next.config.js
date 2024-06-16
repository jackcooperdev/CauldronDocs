const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})
let nextraConfig = withNextra()
nextraConfig.assetPrefix = './'
module.exports = {
    ...withNextra(),
    output: 'export',
    distDir: 'docs',
    // skipTrailingSlashRedirect: true,
    // trailingSlash: true,
    images: {
        unoptimized: true,
    }
};


// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })