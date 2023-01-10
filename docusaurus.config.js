// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Docusaurus bug",
	url: "https://example.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings
	trailingSlash: false,

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: {
					blogTitle: "Docusaurus bug",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [{ name: "keywords", content: "web, development, blog" }],
			colorMode: {
				respectPrefersColorScheme: true,
			},
			navbar: {
				items: [
					{
						to: "blog",
						label: "Blog",
					},
				],
			},
			footer: {
				style: "dark",
				copyright: `Copyright © ${new Date().getFullYear()} Zwyx. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	plugins: [
		[
			"@docusaurus/plugin-client-redirects",
			/** @type {import('@docusaurus/plugin-client-redirects').Options} */
			({
				redirects: [
					{
						from: "/",
						to: "/blog",
					},
				],
			}),
		],
	],
};

module.exports = config;
