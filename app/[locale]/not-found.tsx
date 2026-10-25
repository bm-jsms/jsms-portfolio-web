import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFoundPage() {
	const t = await getTranslations('NotFound');

	return (
		<main className='flex min-h-[60vh] flex-col items-center justify-center px-6 text-center'>
			<p className='text-sm font-semibold tracking-widest'>ERROR 404</p>
			<h1 className='mt-4 text-4xl font-bold'>{t('title')}</h1>
			<p className='mt-3 max-w-md text-gray-600'>{t('description')}</p>
			<Link href='/' className='mt-6 rounded-md bg-black px-5 py-3 text-white'>
				{t('backHome')}
			</Link>
		</main>
	);
}
