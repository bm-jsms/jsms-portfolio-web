'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { HiOutlineChevronUp } from 'react-icons/hi2';

import { routing } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';

const languageOptions = {
	en: { label: 'English', flag: '🇺🇸' },
	es: { label: 'Español', flag: '🇪🇸' },
} as const;

const LocaleSwitcher = () => {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const [isOpen, setIsOpen] = React.useState(false);
	const containerRef = React.useRef<HTMLDivElement>(null);

	const currentLanguage = languageOptions[
		locale as keyof typeof languageOptions
	] ?? {
		label: locale.toUpperCase(),
		flag: '🌐',
	};

	React.useEffect(() => {
		if (!isOpen) return;

		const handlePointerDown = (event: PointerEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		document.addEventListener('pointerdown', handlePointerDown);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen]);

	function changeLocale(newLocale: (typeof routing.locales)[number]) {
		setIsOpen(false);

		if (newLocale === locale) return;

		router.replace(pathname, { locale: newLocale });
	}

	return (
		<div ref={containerRef} className='relative inline-block'>
			<button
				type='button'
				onClick={() => setIsOpen((open) => !open)}
				className='flex w-28 items-center justify-between gap-2 rounded-md cursor-pointer bg-slate-800 p-2 text-gray-200 transition-colors hover:bg-gray-700 hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
				aria-label='Select language'
				aria-expanded={isOpen}
				aria-haspopup='menu'
			>
				<span aria-hidden='true'>🌐</span>
				<span aria-hidden='true'>{currentLanguage.flag}</span>
				<span className='text-sm font-medium'>{locale.toUpperCase()}</span>

				<HiOutlineChevronUp
					aria-hidden='true'
					className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{isOpen && (
				<div
					role='menu'
					aria-label='Choose language'
					className='absolute left-0 top-full z-50 mt-1 w-36 overflow-hidden rounded-md border py-1 shadow-lg dborder-gray-700 bg-gray-800'
				>
					{routing.locales.map((availableLocale) => {
						const language = languageOptions[
							availableLocale as keyof typeof languageOptions
						] ?? {
							label: availableLocale.toUpperCase(),
							flag: '🌐',
						};

						const isCurrentLocale = locale === availableLocale;

						return (
							<button
								key={availableLocale}
								type='button'
								role='menuitemradio'
								aria-checked={isCurrentLocale}
								lang={availableLocale}
								onClick={() => changeLocale(availableLocale)}
								className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
									isCurrentLocale
										? 'font-medium bg-blue-900/50 text-blue-300'
										: 'text-gray-300'
								}`}
							>
								<span aria-hidden='true'>{language.flag}</span>
								<span className='flex-1'>{language.label}</span>
								<span className='text-xs text-gray-500'>
									{availableLocale.toUpperCase()}
								</span>
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

export { LocaleSwitcher };
