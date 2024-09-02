import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
export default {
  docsRepositoryBase: 'https://github.com/jackcooper04/CauldronDocs/tree/main',
  logo: <span>Cauldron Documentation</span>,
  project: {
    link: "https://github.com/jackcooper04",
  },
  useNextSeoProps() {
    const {asPath} = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Cauldron",
      };
    }
  }
  // ... other theme options
};
