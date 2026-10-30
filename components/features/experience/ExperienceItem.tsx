import ExperienceIcon from './ExperienceIcon';
import ExperienceHeader from './ExperienceHeader';
import ExperienceDetails from './ExperienceDetails';
import type { ExperienceItemData } from './types';

type Props = {
	experience: ExperienceItemData;
};

export default function ExperienceItem({ experience }: Props) {
	return (
		<li className='relative pb-10 pl-6 last:pb-0 sm:pl-10'>
			<ExperienceIcon />

			<ExperienceHeader {...experience} />

			<ExperienceDetails
				summary={experience.summary}
				sections={experience.sections}
			/>
		</li>
	);
}
