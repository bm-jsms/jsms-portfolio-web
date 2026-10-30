export type ProjectDataType = {
	id: number;
	slug: string;

	image: string;
	technologies: string[];
	category: string;
	liveUrl: string;
	codeUrl: string;
	featured: boolean;
	favorite: boolean;
	status: string;
	year: number;
};

export const projectsData: ProjectDataType[] = [
	{
		id: 1,
		slug: 'delyfood',

		image: '/images/projects/p1.webp',
		technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'css', 'css'],
		category: 'frontend',
		liveUrl: 'https://jsms-spa-restaurant.netlify.app/',
		codeUrl: 'https://github.com/bm-jsms/spa_restaurant',
		featured: true,
		favorite: true,
		status: 'completed',
		year: 2023,
	},
	{
		id: 2,
		slug: 'ptEcommmerce',

		image: '/images/projects/p2.webp',
		technologies: ['Vue.js', 'Firebase', 'Vuetify', 'css'],
		category: 'frontend',
		liveUrl: 'https://react-ecommerce-plt.vercel.app/',
		codeUrl: 'https://github.com/bm-jsms/react_ecommerce-plt',
		featured: false,
		favorite: false,
		status: 'completed',
		year: 2024,
	},
	{
		id: 3,
		slug: 'jsMazeGame',

		image: '/images/projects/p3.webp',
		technologies: ['JavaScript'],
		category: 'frontend',
		liveUrl: 'https://jsms-maze-videogame.netlify.app/',
		codeUrl: 'https://github.com/bm-jsms/js_maze_videogame-bsplz',
		featured: false,
		favorite: true,
		status: 'completed',
		year: 2024,
	},
	{
		id: 4,
		slug: 'rctQuizTodo',

		image: '/images/projects/p4.webp',
		technologies: ['React'],
		category: 'frontend',
		liveUrl: 'https://react-ts-quiz-app-blue.vercel.app/',
		codeUrl: 'https://github.com/bm-jsms/react-ts_QuizApp',
		featured: false,
		favorite: true,
		status: 'completed',
		year: 2024,
	},
];
