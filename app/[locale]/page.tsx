import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

import { ReactType } from '@/components/ui/ReactTyped';
import { TechnologiesData } from '@/data/technologies';

export default async function HomePage() {
	const t = await getTranslations('HomePage');

	return (
		<section className='p-6 space-y-6 max-md:pt-28 md:max-w-[1000px] md:mx-auto'>
			<h1 className='mt-8 mb-6 text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
				<span className='block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent md:py-4'>
					{t('greeting')}
				</span>

				<span className='mt-3 block min-h-[1.3em] text-cyan-400'>
					<ReactType rol1={t('rol.1')} rol2={t('rol.2')} />
				</span>
			</h1>

			<section className='mt-24 lg:px-4'>
				<div className='border-t border-slate-700/80 px-4 py-12 sm:px-8 lg:py-16'>
					<div className='mx-auto max-w-3xl'>
						<div className='mb-5 flex items-center justify-center gap-3'>
							<span className='h-px w-8 bg-sky-400/80' />
							<span className='text-2xl font-semibold uppercase tracking-[0.2em] text-sky-400'>
								{t('technologies.title')}
							</span>
							<span className='h-px w-8 bg-sky-400/80' />
						</div>

						<div className='mx-auto max-w-2xl space-y-4 text-center'>
							<p className='text-base leading-8 text-slate-300/90 sm:text-lg'>
								{t('technologies.description')}
							</p>

							<p className='text-base leading-8 text-slate-300/90 sm:text-lg'>
								{t('technologies.description2')}
							</p>
						</div>
					</div>
				</div>

				<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 transition-colors'>
					{TechnologiesData.map((data) => (
						<li
							className='rounded-md shadow-md shadow-cyan-600 bg-slate-900 p-4 hover:bg-slate-900/80 border-[1px] border-slate-900 hover:border-cyan-500'
							key={data.title}
						>
							<h3 className='max-md:text-lg text-xl text-center font-medium text-slate-200 py-2 border-b-[3px] border-cyan-500 rounded-b-lg mb-4'>
								{data.title}
							</h3>

							<ul className='space-y-2'>
								{data.content.map(({ name, logo }) => (
									<li
										className='flex flex-row items-center space-x-2 text-slate-300'
										key={name}
									>
										<div className='relative w-5 h-5'>
											<Image
												src={logo}
												alt={name}
												fill
												className='object-contain'
											/>
										</div>
										<p>{name}</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}
