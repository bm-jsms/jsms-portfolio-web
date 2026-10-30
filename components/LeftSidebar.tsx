import { locale as getRootLocale } from 'next/root-params';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';

import { LocaleSwitcher } from './LocaleSwticher';
import { navigationItems } from '@/data/navigationItems';

const LeftSidebar = async () => {
	const locale = await getRootLocale();

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const t = await getTranslations({
		locale,
		namespace: 'Navigation',
	});

	return (
		<aside className='flex min-h-screen w-1/5 min-w-[190px] max-w-[260px] shrink-0 flex-col border-r-1 border-cyan-500/50 bg-gray-900 text-gray-300'>
			<div className='border-b border-white/10 px-6 py-7'>
				<Link
					href='/'
					className='inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 text-center text-2xl font-bold tracking-tight text-white'
				>
					JSMS
				</Link>
			</div>

			<nav
				aria-label='navigation'
				className='flex-1 items-center justify-center overflow-y-auto px-3 py-6'
			>
				<ul className='space-y-1'>
					{navigationItems.map(({ key, href }) => (
						<li key={key}>
							<Link
								href={href}
								className='flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-white/5 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'
							>
								{t(key)}
							</Link>
						</li>
					))}
				</ul>
				<div className='mt-10 flex items-center justify-center'>
					<LocaleSwitcher />
				</div>
			</nav>
		</aside>
	);
};

export { LeftSidebar };
