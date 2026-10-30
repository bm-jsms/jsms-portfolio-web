import { locale as getRootLocale } from 'next/root-params';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';

import { Link } from '@/i18n/navigation';

import { LocaleSwitcher } from '../LocaleSwticher';
import { MobileNavigation } from '../navigation/MobileNavigation';

const MobileNavbar = async () => {
	const locale = await getRootLocale();

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const t = await getTranslations({
		locale,
		namespace: 'Navigation',
	});

	const labels = {
		home: t('home'),
		projects: t('projects'),
		experience: t('experience'),
	};

	return (
		<header className='sticky top-0 z-40 flex w-full items-center justify-between border-b border-cyan-500/50 bg-gray-900 px-4 py-3 md:hidden'>
			<div className='flex items-center gap-3'>
				<MobileNavigation labels={labels} />

				<Link
					href='/'
					className='text-xl font-bold tracking-tight text-white transition-colors hover:text-cyan-300'
				>
					JSMS
				</Link>
			</div>

			<LocaleSwitcher />
		</header>
	);
};

export { MobileNavbar };
