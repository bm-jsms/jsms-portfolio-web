'use client';

import { useState } from 'react';

import { Link } from '@/i18n/navigation';
import { navigationItems } from '@/data/navigationItems';

import { HiX, HiOutlineMenu } from 'react-icons/hi';

interface MobileNavigationProps {
	labels: Record<(typeof navigationItems)[number]['key'], string>;
}

const MobileNavigation = ({ labels }: MobileNavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='relative'>
			<button
				type='button'
				onClick={() => setIsOpen((prev) => !prev)}
				aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
				aria-expanded={isOpen}
				aria-controls='mobile-navigation'
				className='flex h-8 w-8 items-center justify-center text-gray-300 transition-colors hover:bg-white/5 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 border rounded-lg'
			>
				{isOpen ? (
					<HiX className='text-md' />
				) : (
					<HiOutlineMenu className='text-lg' />
				)}
			</button>

			{isOpen && (
				<nav
					id='mobile-navigation'
					aria-label='Mobile navigation'
					className='fixed inset-x-0 top-[64px] z-50 w-full border-b border-cyan-500/30 bg-gray-900 px-4 py-4 shadow-xl shadow-black/30'
				>
					<ul className='space-y-1'>
						{navigationItems.map(({ key, href }) => (
							<li key={key}>
								<Link
									href={href}
									onClick={() => setIsOpen(false)}
									className='block rounded-lg px-4 py-3 text-md font-semibold text-gray-400 transition-colors hover:bg-white/5 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-400 text-center'
								>
									{labels[key]}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

export { MobileNavigation };
