'use client';

import { ReactTyped } from 'react-typed';

interface ReactTypeProps {
	rol1: string;
	rol2: string;
}
const ReactType = ({ rol1, rol2 }: ReactTypeProps) => {
	return (
		<ReactTyped
			strings={[rol1, rol2]}
			typeSpeed={60}
			backSpeed={35}
			backDelay={1500}
			startDelay={300}
			loop
			showCursor
			className='inline-block '
		/>
	);
};

export { ReactType };
