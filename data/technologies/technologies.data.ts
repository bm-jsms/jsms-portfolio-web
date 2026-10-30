interface TechData {
	title: string;
	content: TechContent[];
}
interface TechContent {
	logo: string;
	name: string;
}

export const TechnologiesData: TechData[] = [
	{
		title: 'Web',
		content: [
			{
				logo: '/images/technologies/web/html.svg',
				name: 'html',
			},
			{
				logo: '/images/technologies/web/css.svg',
				name: 'css',
			},
			{
				logo: '/images/technologies/web/sass.svg',
				name: 'SCSS & Scss',
			},
			{
				logo: '/images/technologies/web/tailwindcss.svg',
				name: 'TailwindCSS',
			},
		],
	},
	{
		title: 'Languages',
		content: [
			{
				logo: '/images/technologies/languages/javascript.svg',
				name: 'JavaScript',
			},
			{
				logo: '/images/technologies/languages/python.svg',
				name: 'python',
			},
			{
				logo: '/images/technologies/languages/typescript.svg',
				name: 'TypeScript',
			},
			{
				logo: '/images/technologies/languages/php.svg',
				name: 'PHP',
			},
		],
	},
	{
		title: 'Frontend',
		content: [
			{
				logo: '/images/technologies/frontend/angular.svg',
				name: 'Angular +15',
			},
			{
				logo: '/images/technologies/frontend/angular_new.svg',
				name: 'Angular',
			},
			{
				logo: '/images/technologies/frontend/react.svg',
				name: 'React',
			},
			{
				logo: '/images/technologies/frontend/next.svg',
				name: 'NextJS',
			},
			{
				logo: '/images/technologies/frontend/astrojs.svg',
				name: 'Astro',
			},
		],
	},
	{
		title: 'Backend',
		content: [
			{
				logo: '/images/technologies/backend/nodejs.svg',
				name: 'NodeJS',
			},
			{
				logo: '/images/technologies/backend/express.svg',
				name: 'Express',
			},
			{
				logo: '/images/technologies/backend/nest.svg',
				name: 'NestJS',
			},
			{
				logo: '/images/technologies/backend/django.svg',
				name: 'Django',
			},
		],
	},
	{
		title: 'DataBases',
		content: [
			{
				logo: '/images/technologies/databases/mongodb.svg',
				name: 'MongoDB',
			},
			{
				logo: '/images/technologies/databases/pg.svg',
				name: 'PostgreSQL',
			},
			{
				logo: '/images/technologies/databases/mysql.svg',
				name: 'MySQL',
			},
			{
				logo: '/images/technologies/databases/sqlite.svg',
				name: 'SQLite',
			},
		],
	},
	{
		title: 'ORM',
		content: [
			{
				logo: '/images/technologies/orm/prisma.svg',
				name: 'Prisma',
			},
			{
				logo: '/images/technologies/orm/typeorm.svg',
				name: 'TypeORM',
			},
			{
				logo: '/images/technologies/orm/mongoose.svg',
				name: 'Moongose',
			},
		],
	},
	{
		title: 'BaaS',
		content: [
			{
				logo: '/images/technologies/baas/firebase.svg',
				name: 'Firebase',
			},
			{
				logo: '/images/technologies/baas/supabase.svg',
				name: 'Supabase',
			},
		],
	},
	{
		title: 'Mobile',
		content: [
			{
				logo: '/images/technologies/mobile/react_native.svg',
				name: 'React Native',
			},
		],
	},
	{
		title: 'Testing',
		content: [
			{
				logo: '/images/technologies/testing/jest.svg',
				name: 'Jest',
			},
			{
				logo: '/images/technologies/testing/vitest.svg',
				name: 'Vitest',
			},
		],
	},
	{
		title: 'DevOps',
		content: [
			{
				logo: '/images/technologies/devops/docker.svg',
				name: 'Docker',
			},
			{
				logo: '/images/technologies/devops/git.svg',
				name: 'Git',
			},
			{
				logo: '/images/technologies/devops/github.svg',
				name: 'GitHub',
			},
		],
	},
];
