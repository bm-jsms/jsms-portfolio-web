import ExperienceSection from './ExperienceSection';
import type { ExperienceItemData } from './types';

type Props = Pick<ExperienceItemData, 'summary' | 'sections'>;

export default function ExperienceDetails({ summary, sections }: Props) {
	return (
		<div className='mt-2 space-y-5 rounded-md bg-slate-800/80 p-4 text-sm leading-6 text-slate-300'>
			{summary && <p>{summary}</p>}

			{sections.map((section, index) => (
				<ExperienceSection
					key={`${section.title}-${index}`}
					section={section}
				/>
			))}
		</div>
	);
}
