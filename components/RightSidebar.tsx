import { SocialLinks } from './features/social/SocialLinks';

interface RightSidebarProps {
	style: string;
}

const RightSidebar = ({ style }: RightSidebarProps) => {
	return (
		<aside
			className={`bg-slate-900 border-l border-cyan-600 flex flex-col ${style}`}
		>
			<div className='p-4 border-b border-gray-200'>
				<h3 className='font-semibold text-gray-100'>Contacto & Enlaces</h3>
			</div>

			<div className='flex-1 overflow-y-auto p-4'>
				<SocialLinks />
			</div>
		</aside>
	);
};

export { RightSidebar };
