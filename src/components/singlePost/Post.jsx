import React from 'react';
import Image from 'next/image';
// import { useState, useEffect } from 'react';

const Post = ({ api }) => {
	// console.log();

	return (
		<div>
			<div className="mt-10">
				<h1 className="text-center text-2xl font-bold mb-10">
					{api.data.attributes.title}
				</h1>

				<div className="w-full h-48 md:h-64 lg:h-96 relative mb-10">
					<Image
						src="/p1.jpeg"
						fill
						alt="..."
						className="absolute object-cover"
					/>
				</div>

				<div className="text-lg text-justify">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
						consequatur in ratione id, assumenda consequuntur impedit ducimus
						illum possimus minus aut aspernatur, sapiente suscipit, libero
						labore odit voluptatibus. Optio, quidem.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
						consequatur in ratione id, assumenda consequuntur impedit ducimus
						illum possimus minus aut aspernatur, sapiente suscipit, libero
						labore odit voluptatibus. Optio, quidem.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
