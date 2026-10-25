import { locale as getRootLocale } from 'next/root-params';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';

import { LocaleSwitcher } from './LocaleSwticher';

const LeftSidebar = async () => {
	const locale = await getRootLocale();

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const t = await getTranslations({
		locale,
		namespace: 'Navigation',
	});

	const navigationItems = [
		{ key: 'home', href: '/' },
		{ key: 'about', href: '/about' },
	] as const;

	return (
		<aside className='flex flex-col border-r-[1px] border-cyan-700/85 bg-gray-800 min-w-[190px] max-w-[260px] w-1/5'>
			<div className='border-b border-gray-100 p-6'>
				<h1 className='text-2xl font-bold text-gray-200'>JSMS</h1>

				<p className='mt-1 text-sm text-gray-200'>Full Stack Developer</p>
			</div>

			<nav className='flex-1 overflow-y-auto p-4'>
				<ul className='space-y-2'>
					{navigationItems.map(({ key, href }) => (
						<li key={key}>
							<Link href={href} className='text-gray-200'>
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
