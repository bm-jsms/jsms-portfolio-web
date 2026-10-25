'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const localeNames: Record<string, string> = {
	en: 'English',
	es: 'Español',
	de: 'Deutchsland',
};

export default function LanguageSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	function handleChange(nextLocale: string) {
		router.replace({ pathname }, { locale: nextLocale });
	}

	return (
		<label>
			<span className='sr-only'>Language</span>

			<select
				value={locale}
				onChange={(event) => handleChange(event.target.value)}
				aria-label='Select language'
			>
				{routing.locales.map((item) => (
					<option key={item} value={item}>
						{localeNames[item] ?? item}
					</option>
				))}
			</select>
		</label>
	);
}
