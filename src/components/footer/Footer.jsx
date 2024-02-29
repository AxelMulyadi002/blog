import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className="mb-10 mt-10">
			<div className="md:flex md:gap-4 md:justify-between">
				<div className="flex flex-col gap-4 mb-10 lg:w-2/3">
					<h1 className="text-xl font-bold sm:text-2xl">Axel Blog</h1>
					<p className="text-sm sm:text-md">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
						necessitatibus est expedita neque id quidem aspernatur delectus
						molestiae nam voluptatem.
					</p>
					<Link href="/">
						<Image src="/instagram.png" alt="..." width={30} height={30} />
					</Link>
				</div>
				<div className="flex gap-5 justify-between">
					<div className="flex flex-col gap-3">
						<h1 className="text-xl font-bold">Link</h1>
						<Link href="/">Homepage</Link>
						<Link href="/">Contact</Link>
						<Link href="/">About</Link>
					</div>
					<div className="flex flex-col gap-3 ">
						<h1 className="text-xl font-bold">Tags</h1>
						<Link href="/daily">Daily Life</Link>
						<Link href="/book">Book</Link>
						<Link href="/coding">Coding</Link>
						<Link href="/project">Project</Link>
					</div>
					<div className="flex flex-col gap-3 ">
						<h1 className="text-xl font-bold">Social</h1>
						<Link href="/">Instagram</Link>
						<Link href="/">Linkedin</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
