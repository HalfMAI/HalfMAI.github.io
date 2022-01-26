// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HalfMAI's Memory",
  tagline: '记录某些记忆',
  url: 'https://HalfMAI.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HalfMAI', // Usually your GitHub org/user name.
  projectName: 'HalfMAI.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-NVW49LKCYD',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/HalfMAI/HalfMAI.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {          
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          // postsPerPage: 10,
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/HalfMAI/HalfMAI.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "HalfMAI's Memory",
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/HalfMAI',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/HalfMAI',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HalfMAI. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
