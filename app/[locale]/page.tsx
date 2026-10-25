import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function HomePage() {
	const t = await getTranslations('HomePage');
	const nav = await getTranslations('Navigation');

	return (
		<main>
			<h1>{t('title')}</h1>

			<p>{t('description')}</p>

			<Link href='/about'>{t('aboutLink')}</Link>

			<nav aria-label='Main navigation'>
				<Link href='/'>{nav('home')}</Link>
				{' | '}
				<Link href='/about'>{nav('about')}</Link>
			</nav>
		</main>
	);
}
