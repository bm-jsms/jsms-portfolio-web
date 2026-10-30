import type { ExperienceItemData } from './types';

type Props = Pick<
	ExperienceItemData,
	'role' | 'company' | 'location' | 'startDate' | 'endDate'
>;

export default function ExperienceHeader({
	role,
	company,
	location,
	startDate,
	endDate,
}: Props) {
	return (
		<header>
			<h3 className='text-lg font-bold leading-7 text-slate-100'>{role}</h3>

			<div className='mt-2 flex flex-wrap items-center gap-x-2 gap-y-1'>
				<span className='text-base font-medium text-slate-100'>{company}</span>

				{location && <span className='text-sm text-slate-300'>{location}</span>}
			</div>

			<p className='mt-3 text-sm text-slate-300'>
				{startDate} - {endDate}
			</p>
		</header>
	);
}
