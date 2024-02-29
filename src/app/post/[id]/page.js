import React from 'react';
import Image from 'next/image';

const Page = async ({ params }) => {
	const id = params.id;

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BLOG}/${id}?populate=*`
	);
	const data = await response.json();

	return (
		<div>
			<div className="mt-20">
				<h1 className="text-center text-2xl font-bold mb-10 lg:text-6xl">
					{data.data.attributes.title}
				</h1>

				<div className="w-[90%] h-48 md:h-64 lg:h-[80vh] relative mb-10 m-auto">
					<Image
						src={`http://localhost:1337${data.data.attributes.image.data.attributes.formats.thumbnail.url}`}
						fill
						alt="..."
						className="absolute object-cover"
					/>
				</div>

				<div className="text-lg text-justify flex flex-col gap-5  w-[90%] m-auto">
					{data.data.attributes.paragraph.map((val) => {
						return val.children.map((el, index) => {
							return (
								<div key={index}>
									<p>{el.text}</p>
								</div>
							);
						});
					})}
				</div>
			</div>
		</div>
	);
};

export default Page;
