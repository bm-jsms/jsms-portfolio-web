import { projectsData } from './projects.data';

export const categories = [
	{
		id: 'all',
		label: 'All',
		count: projectsData.length,
	},
	{
		id: 'frontend',
		label: 'Frontend',
		count: projectsData.filter((p) => p.category === 'frontend').length,
	},
	{
		id: 'backend',
		label: 'Backend',
		count: projectsData.filter((p) => p.category === 'backend').length,
	},
	{
		id: 'fullstack',
		label: 'Full Stack',
		count: projectsData.filter((p) => p.category === 'fullstack').length,
	},
	{
		id: 'mobile',
		label: 'Mobile',
		count: projectsData.filter((p) => p.category === 'mobile').length,
	},
];
