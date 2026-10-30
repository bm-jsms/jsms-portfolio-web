'use client';

import { categories } from '@/data/projects/categories.data';
import { projectsData } from '@/data/projects/projects.data';
import { useFilterStore } from '@/utils/useFilter';
import { useTranslations } from 'next-intl';

import { FaGithub, FaRocket } from 'react-icons/fa';

const ProjectCardDetailed = () => {
	const t = useTranslations('Projects');
	const { activeFilter } = useFilterStore();

	const filteredProjects = projectsData.filter((project) => {
		return activeFilter === 'all' || project.category === activeFilter;
	});

	return (
		<>
			{filteredProjects.map((project) => (
				<div
					key={project.id}
					className='group flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl border-gray-700 bg-gray-900 hover:border-cyan-800 border-2'
				>
					<div className='relative overflow-hidden'>
						<img
							src={project.image}
							alt={t(`items.${project.slug}.title`)}
							className='h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105'
						/>

						<div className='absolute top-3 left-3'>
							<span
								className={`$ text-white px-3 py-1 rounded-full text-xs font-semibold`}
							>
								{categories.find((cat) => cat.id === project.category)?.label}
							</span>
						</div>

						<div className='absolute top-3 right-3'>
							<span className='bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-xs'>
								{project.year}
							</span>
						</div>
					</div>

					<div className='flex flex-1 flex-col p-4'>
						<h3 className='text-md md:text-lg font-bold text-gray-100 mb-2'>
							{t(`items.${project.slug}.title`)}
						</h3>

						<p className='text-sm md:text-base text-gray-300 mb-4 leading-relaxed'>
							{t(`items.${project.slug}.description`)}
						</p>

						<div className='mb-5 mt-auto'>
							<h4 className='text-sm font-semibold text-gray-300 mb-2'>
								Stack
							</h4>
							<div className='flex flex-wrap gap-2'>
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className='bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border'
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className='flex gap-3 border-t border-gray-200 pt-4 dark:border-gray-800'>
							<a
								href={project.liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500/60 px-3 py-2.5 font-medium text-white transition-colors hover:bg-blue-500/90'
							>
								<FaRocket />
								<span>Live</span>
							</a>

							<a
								href={project.codeUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-800 px-3 py-2.5 font-medium text-white transition-colors hover:bg-gray-700'
							>
								<FaGithub />
								<span>Code</span>
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export { ProjectCardDetailed };
