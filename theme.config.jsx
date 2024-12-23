import { useRouter } from 'next/router'
import {useConfig} from "nextra-theme-docs";

export default {
    head() {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://docs.cauldronmc.com' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
        let pageTitle = '';
        if (!frontMatter.title) {
            pageTitle = 'Cauldron Docs'
        } else {
            pageTitle = `${frontMatter.title} - Cauldron Docs`;
        }

        return (
            <>
                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title || 'Cauldron Docs'} />
                <meta
                    property="og:description"
                    content={frontMatter.description || 'Cauldron Documentation'}
                />
                <title>{pageTitle}</title>
            </>
        )
    },
    banner: {
        key: '2.0-release',
        dismissible:false,
        content: (
            <a >
                🚧 This project and documentation is under construction. Packages and APIS may not be ready or available. 🚧
            </a>
        )
    },
  docsRepositoryBase: 'https://github.com/jackcooper04/CauldronDocs/tree/development',
  logo: <span>Cauldron Documentation</span>,
  project: {
    link: "https://github.com/jackcooper04",
  },
  // ... other theme options
};
