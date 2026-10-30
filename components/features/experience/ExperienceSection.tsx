import ExperienceBullet from './ExperienceBullet';
import type { ExperienceSectionData } from './types';

type Props = {
	section: ExperienceSectionData;
};

export default function ExperienceSection({ section }: Props) {
	return (
		<section>
			<h4 className='mb-2 text-base font-semibold text-slate-300'>
				{section.title}
			</h4>

			<ul className='list-disc space-y-1 pl-6'>
				{section.bullets.map((bullet, index) => (
					<li key={index}>
						<ExperienceBullet {...bullet} />
					</li>
				))}
			</ul>
		</section>
	);
}
