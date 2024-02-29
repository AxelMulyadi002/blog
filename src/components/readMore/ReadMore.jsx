import React from 'react';
import Link from 'next/link';

export const ReadMore = () => {
	return (
		<div>
			<div className="flex justify-end text-center cursor-pointer">
				<Link href={'/more'}>
					<div className="bg-[#dc143c] p-4  rounded-lg text-white">
						Read More
					</div>
				</Link>
			</div>
		</div>
	);
};
