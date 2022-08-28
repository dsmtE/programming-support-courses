// @ts-check

const fetch = require("node-fetch");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
module.exports = async () => {

  const contact_info = await fetch(
    "https://raw.githubusercontent.com/dsmtE/dsmtE/main/contact.json"
  ).then((res) => res.json()).catch((err) => ({}));

  return {
    title: 'Cours de soutien programmation',
    tagline: '',
    url: `https://dsmte.github.io/`,
    baseUrl: '/programming-support-courses/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'imgs/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'dsmtE', // Usually your GitHub org/user name.
    projectName: 'programming-support-courses', // Usually your repo name.

    i18n: {
      defaultLocale: 'fr',
      locales: ['fr'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: "./content",
            routeBasePath: "/",
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [math],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
        integrity:
          "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
        crossorigin: "anonymous",
      },
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '',
          logo: {
            alt: 'Logo',
            src: 'imgs/logo.svg',
          },
          items: [
            {to: '/Lessons', label: 'Cours', position: 'left'},
            {to: '/Exercises', label: 'Excercices', position: 'left'},
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              label: "Discord",
              to: `https://discord.com/users/${contact_info.discord_user_id}`,
            },
            {
              label: "E-Mail",
              to: `mailto:${contact_info.email}`,
            },
            {
              label: "GitHub",
              to: "https://github.com/dsmtE",
            },
          ],

          copyright:
           `These lessons were written by <a href="https://github.com/dsmtE">DE SMET Enguerrand</a> with the help of <a href="https://julesfouchy.github.io/">Jules Fouchy</a><br/>` +
            `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.` +
            `<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,

        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["cmake", "csharp"],
        },
      }),
  };
};

