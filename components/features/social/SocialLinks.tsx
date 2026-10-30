import { socialLinks } from '@/data/social/social.data';

const SocialLinks = () => {
	return (
		<div className='flex flex-col gap-3'>
			{socialLinks.map((social) => {
				const Icon = social.icon;

				return (
					<a
						key={social.name}
						href={social.url}
						target={social.url.startsWith('mailto:') ? undefined : '_blank'}
						rel='noopener noreferrer'
						className='group flex items-center gap-3 rounded-lg border border-slate-700/70 bg-slate-800/50 p-3 transition-all hover:border-sky-500/50 hover:bg-slate-800'
					>
						<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-slate-300 transition-colors group-hover:bg-sky-500/10 group-hover:text-sky-400'>
							<Icon size={20} />
						</div>

						<div className='min-w-0 flex-1'>
							<div className='flex items-center justify-between gap-2'>
								<h4 className='text-sm font-semibold text-slate-100'>
									{social.name}
								</h4>

								<span className='text-slate-500 transition-colors group-hover:text-sky-400'>
									↗
								</span>
							</div>

							<p className='truncate text-xs text-slate-400'>
								{social.username}
							</p>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export { SocialLinks };
