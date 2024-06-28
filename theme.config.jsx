import { useRouter } from 'next/router'

export default {
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
