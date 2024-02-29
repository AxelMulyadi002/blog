import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Featured = async ({ api }) => {
	const data = api.data[0];

	return (
		<div className=" z-0 w-[90%]">
			<div className="text-2xl font-semibold lg:mb-32 mb-14 md:text-7xl mt-16 ">
				<span className="font-extrabold">Hey, Axel Blog Here!</span>
				<div>Discover my latest stories and my writing</div>
			</div>
			<div className="flex gap-4 lg:h-96 lg:items-center">
				<div className="hidden lg:block lg:min-w-[35%] lg:min-h-[120%] relative ">
					<Image
						src={`http://localhost:1337${data.attributes.image.data.attributes.formats.thumbnail.url}`}
						alt="..."
						fill
						className="md:rounded-lg absolute object-cover"
					/>
				</div>
				<div className="flex flex-col gap-6 ">
					<h1 className="text-3xl font-extrabold lg:text-3xl xl:text-6xl">
						{data.attributes.title}
					</h1>
					<p className="text-sm dark:text-slate-300 md:text-lg ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere
						cumque fugit odio inventore rem id explicabo voluptas accusantium
						ipsum aspernatur illo sapiente possimus, dolorum ea sed officiis,
						repellat veniam mollitia voluptatum doloremque! Nostrum commodi
						similique eius ipsa magni earum?
					</p>
					<Link href={`/post/${data.id}`}>
						<button className="p-4 w-36 dark:bg-white dark:text-black bg-black text-white rounded-md">
							Read More
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
