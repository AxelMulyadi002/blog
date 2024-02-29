import React from 'react';
import Image from 'next/image';
import { listData } from './listData';
import Link from 'next/link';

export const Categories = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold mt-16 lg:mt-32 mb-10">
				Popular Categories
			</h1>
			<div className="flex flex-col gap-4 w-full sm:grid sm:grid-cols-2 lg:grid-cols-4 ">
				{listData.map((data, index) => {
					return (
						<Link key={index} href={`/${data.link}`}>
							<div
								className={`${data.bg} flex items-center justify-center gap-2 p-4 cursor-pointer`}
							>
								<div className="rounded-full w-10 h-10  relative">
									<Image
										src={data.src}
										fill
										alt="..."
										className="object-cover rounded-full w-full absolute"
									/>
								</div>

								<h1 className="text-white capitalize">{data.name}</h1>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
