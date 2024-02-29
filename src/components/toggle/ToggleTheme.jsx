'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../context/ThemeContext';

export const ToggleTheme = () => {
	const { theme, toggle } = useContext(ThemeContext);

	return (
		<div className={`cursor-pointer ${theme}`} onClick={toggle}>
			<div className="w-12 h-6 bg-[#0f172a] rounded-full relative z-0 dark:bg-white">
				<div
					className={`absolute  z-10 flex bottom-0 top-0 p-1 gap-4 items-center`}
				>
					<Image
						src="/moon.png"
						alt="..."
						width={12}
						height={12}
						className="object-contain"
					/>
					<Image
						src="/sun.png"
						alt="..."
						width={12}
						height={12}
						className="object-contain"
					/>
				</div>
				<div
					className={`w-5 h-5 rounded-full bg-white absolute z-20 items-center top-0.5 dark:bg-[#0f172a] ${
						theme === 'dark' ? 'right-0.5' : 'left-0.5'
					}`}
				></div>
			</div>
		</div>
	);
};
