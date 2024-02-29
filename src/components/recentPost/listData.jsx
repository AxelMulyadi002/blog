import Image from 'next/image';
import Link from 'next/link';

export const Posts = ({ api }) => {
	// const data = await getFetch();

	return (
		<div>
			<div className="flex justify-between text-center cursor-pointer">
				<div className="bg-[#dc143c] p-4 w-24 rounded-lg text-white">
					Previous
				</div>
				<div className="bg-[#dc143c] p-4 w-24 rounded-lg text-white">Next</div>
			</div>
		</div>
	);
};
