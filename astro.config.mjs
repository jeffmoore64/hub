import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://certs.msfthub.wiki/';

export default defineConfig({
	redirects: {
		'/office': '/wiki',
		'/guide': '/guide/introduction',
		'/m365': '/wiki',
		'/microsoft365': '/wiki',
		'/azure': '/wiki',
		'/power': '/wiki',
		'/powerplatform': '/wiki',
		'/security': '/wiki',
		'/dynamics': '/wiki',
		'/dynamics365': '/wiki',
	  },
	integrations: [
		starlight({
			title: 'Microsoft Certification Hub',
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + 'og.jpg' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + 'og.jpg' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:url', content: 'https://certs.msfthub.wiki/' },
				},
				{
					tag: 'script',
					attrs: {
					  src: 'https://www.clarity.ms/tag/',
					  defer: true,
					},
				},
			],
			editLink: {
				baseUrl: 'https://github.com/mscerts/hub/edit/main/',
			},
			logo: {
				light: '/src/assets/msftcertblack.svg',
				dark: '/src/assets/msftcertwhite.svg',
				replacesTitle: true,
            },
			customCss: process.env.NO_GRADIENTS ? [	'./src/custom.css'] : ['./src/landing.css', 	'./src/custom.css'],
			social: {
				github: 'https://github.com/mscerts/hub',
				discord: 'https://discord.gg/microsoft-certification-study-group-676990910176821270',
			},
			sidebar: [
				{
					label: 'Updates Blog',
					link: '/blog',
				},
				{
					label: 'Guide',
					items: [
						{ label: 'Introduction', link: '/guide/introduction/' },
						{ label: 'Overview', link: '/guide/overview/' },
						{ label: 'Your Certification Profile', link: '/guide/certificationprofile/' },
						{ label: 'Scheduling an Exam', link: '/guide/schedulingexam/' },						
						{ label: 'Certification Dashboard', link: '/guide/certificationdashboard/' },
						{ label: 'Taking The Exam', link: '/guide/takingtheexams/' },
						{ label: 'Official Study Materials', link: '/guide/officialstudymaterials/' },
						{ label: 'Opportunities for Students', link: '/guide/studentopportunities/' },
						{ label: 'Certification Renewal', link: '/guide/certificationrenewal/' },
						{ label: 'Microsoft Partner Employees', link: '/guide/partneremployees/' },

					],
				},
				{
					label: 'Voucher Offers',
					autogenerate: { directory: 'vouchers' },
				},
				{
					label: 'Wiki Collection',
					link: '/wiki',
				},
				{
					label: 'Exams',
					collapsed: false,
					items: [
						{ label: 'Azure', collapsed:true, autogenerate: { directory: 'azure', collaped:true },},
						{ label: 'Office', collapsed:true, autogenerate: { directory: 'office', collaped:true },},
						{ label: 'Microsoft 365', collapsed:true, autogenerate: { directory: 'microsoft365', collaped:true },},
						{ label: 'Dynamics 365', collapsed:true, autogenerate: { directory: 'dynamics', collaped:true },},
						{ label: 'Power Platform', collapsed:true, autogenerate: { directory: 'power', collaped:true },},
						{ label: 'Security & Identity', collapsed:true, autogenerate: { directory: 'security', collaped:true },},
					],
				},
			],
			lastUpdated: true,
		}),
	],
});
