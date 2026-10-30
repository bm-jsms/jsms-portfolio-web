import Image from 'next/image';

const Banner = () => {
	return (
		<section
			aria-label='Developer banner'
			className='mx-auto w-full max-w-5xl px-1 sm:px-2'
		>
			<div className='group relative overflow-hidden rounded-2xl border border-cyan-700/70 bg-slate-900 shadow-lg shadow-black/10'>
				<Image
					src='/images/banner.webp'
					alt='Banner'
					width={1200}
					height={400}
					priority
					sizes='(max-width: 768px) 100vw, 1000px'
					className='h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]'
				/>
			</div>
		</section>
	);
};

export { Banner };
