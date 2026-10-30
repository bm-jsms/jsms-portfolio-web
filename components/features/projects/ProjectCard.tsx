import type { ProjectDataType } from '@/data/projects/projects.data';
import Link from 'next/link';
import { HiCodeBracket, HiEye } from 'react-icons/hi2';

interface ProjectCardHoverProps {
	project: ProjectDataType;
	description: string;
	title: string;
}

const ProjectCardHover = ({
	project,
	description,
	title,
}: ProjectCardHoverProps) => {
	return (
		<li className='flex flex-col h-full rounded-xl transition-all duration-300 transform'>
			<div className='relative overflow-hidden rounded-t-2xl group'>
				<img
					src={project.image}
					alt={title}
					className='w-full h-28 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105'
				/>

				<div
					className='rounded-t-xl overlay items-center justify-center absolute top-0 left-0 w-full h-full 
                  bg-[#0a0a1b] bg-opacity-0 hidden group-hover:flex group-hover:opacity-85 
                  transition-all duration-500'
				>
					<Link
						href={project.codeUrl}
						target='_blank'
						className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
					>
						<HiCodeBracket className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
					<Link
						href={project.liveUrl}
						target='_blank'
						className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
					>
						<HiEye className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
				</div>
			</div>

			<div className='flex flex-col flex-grow p-4 bg-white'>
				<h3 className='max-md:text-sm text-lg text-center font-bold text-gray-800 group-hover:text-blue-600 transition-colors'>
					{title}
				</h3>

				<p className='text-gray-600 text-sm mb-3 line-clamp-2 flex-grow max-sm:hidden'>
					{description}
				</p>

				<div className='flex flex-wrap gap-1 mt-auto max-md:hidden'>
					{project.technologies.length <= 3
						? project.technologies.map((tech, index) => (
								<span
									key={index}
									className='bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium'
								>
									{tech}
								</span>
							))
						: project.technologies.slice(0, 3).map((tech, index) => (
								<span
									key={index}
									className='bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium'
								>
									{tech}
								</span>
							))}

					{project.technologies.length > 3 && (
						<span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium'>
							+{project.technologies.length - 3}
						</span>
					)}
				</div>
			</div>
		</li>
	);
};

export { ProjectCardHover };
