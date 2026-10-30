'use client';
import { categories } from '@/data/projects/categories.data';
import { useFilterStore } from '@/utils/useFilter';

const ProjectFilters = () => {
	const { activeFilter, setActiveFilter } = useFilterStore();

	return (
		<div className='mb-8'>
			<div className='flex flex-wrap justify-center gap-3'>
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => setActiveFilter(category.id)}
						className={`px-2 py-1 cursor-pointer rounded-full font-medium transition-all duration-300 flex items-center space-x-1 ${
							activeFilter === category.id
								? 'bg-blue-500 text-white shadow-lg transform scale-105'
								: 'bg-white text-gray-700 hover:bg-gray-300 '
						}`}
					>
						<span>{category.label}</span>
						<span
							className={`text-xs px-2 py-0.5 rounded-full ${
								activeFilter === category.id ? 'bg-gray-700' : 'bg-gray-200'
							}`}
						>
							{category.count}
						</span>
					</button>
				))}
			</div>
		</div>
	);
};

export { ProjectFilters };
