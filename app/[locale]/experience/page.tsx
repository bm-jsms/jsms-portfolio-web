import { getTranslations } from 'next-intl/server';

import type { ExperienceItemData } from '@/components/features/experience/types';
import ExperienceItem from '@/components/features/experience/ExperienceItem';

export default async function ExperiencePage() {
	const t = await getTranslations('ExperiencePage');

	const experiences = t.raw('items') as ExperienceItemData[];

	return (
		<main className='mx-auto w-full max-w-[1000px] space-y-6 p-6 max-md:pt-28'>
			<h2 className='text-3xl font-bold text-slate-200 text-center mb-10'>
				{t('title')}
			</h2>

			<ol className='ml-2 border-l-2 border-slate-600'>
				{experiences.map((experience) => (
					<ExperienceItem key={experience.id} experience={experience} />
				))}
			</ol>
		</main>
	);
}
