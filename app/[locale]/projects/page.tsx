import { getTranslations } from 'next-intl/server';

import { projectsData } from '@/data/projects/projects.data';
import { ProjectCardHover } from '@/components/features/projects/ProjectCard';
import { ProjectFilters } from '@/components/features/projects/ProjectFilters';
import { ProjectCardDetailed } from '@/components/features/projects/ProjectCardDetailed';

export default async function ProjectsPage() {
	const t = await getTranslations('Projects');

	console.log(typeof t);

	return (
		<main className='p-6 space-y-6 max-md:pt-28 md:max-w-[1000px] md:mx-auto min-h-screen'>
			<section className='bg-gradient-to-r p-8 mb-8'>
				<div className='text-center mb-6'>
					<div className='mb-5 flex items-center justify-center gap-3'>
						<span className='h-px w-8 bg-sky-400/80' />
						<h2 className='text-2xl font-semibold uppercase tracking-[0.2em] text-sky-400'>
							{t('title')}
						</h2>
						<span className='h-px w-8 bg-sky-400/80' />
					</div>
					<p className='text-base leading-8 text-slate-100/90 sm:text-lg'>
						{t('description')}
					</p>
				</div>

				<ul className='grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-stretch'>
					{projectsData
						.filter((p) => p.favorite === true)
						.map((p) => (
							<ProjectCardHover
								key={p.id}
								project={p}
								description={t(`items.${p.slug}.description`)}
								title={t(`items.${p.slug}.title`)}
							/>
						))}
				</ul>
			</section>
			<ProjectFilters />

			<div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3'>
				<ProjectCardDetailed />
			</div>
		</main>
	);
}
