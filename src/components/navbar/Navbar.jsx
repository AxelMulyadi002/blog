'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ToggleTheme } from '../toggle/ToggleTheme';

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="mt-6 ">
			<div className="flex justify-between items-center md:items-start md:justify-between ">
				<Link href="/">
					<h1 className="text-3xl font-extrabold z-20 cursor-pointer">
						AxelBlog
					</h1>
				</Link>
				<div className="flex items-center gap-3 md:items-center">
					<div
						className="flex flex-col gap-2 relative md:hidden z-20"
						onClick={() => setOpen(!open)}
					>
						<div
							className={`w-10 h-1 dark:bg-white bg-black rounded-md ${
								open === true
									? '-rotate-45 absolute transition transform duration-200 ease-in'
									: ''
							}`}
						></div>
						<div
							className={`w-10 h-1 dark:bg-white bg-black rounded-md ${
								open === true ? 'invisible' : ''
							}`}
						></div>
						<div
							className={`w-10 h-1 dark:bg-white bg-black rounded-md ${
								open === true
									? 'rotate-45 absolute transition transform duration-200 ease-in'
									: ''
							}`}
						></div>
					</div>
				</div>

				<div
					className={`flex-col gap-4 justify-center items-center text-center  md:h-0 z-10 absolute md:static left-0 right-0 top-0 bottom-0 dark:bg-[#0f172a] bg-white text-2xl md:items-start ${
						open === true ? 'flex' : 'hidden md:flex md:flex-row'
					}`}
				>
					<div className="flex flex-col md:flex-row gap-4 items-center">
						<ToggleTheme />
						<Link href="/">
							<ul onClick={() => setOpen(!open)}>Homepage</ul>
						</Link>
						<Link href="/">
							<ul onClick={() => setOpen(!open)}>Contact</ul>
						</Link>
						<Link href="/">
							<ul onClick={() => setOpen(!open)}>About</ul>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
