import React from 'react';

export const Pagination = ({ setPage, page, lastPage }) => {
	return (
		<div className="mt-16 mb-10">
			<div className="flex justify-between text-center cursor-pointer">
				<button
					className={`bg-[#dc143c] p-4 w-24 rounded-lg text-white ${
						page === 1 ? `invisible` : ``
					}`}
					onClick={() => {
						if (page === 1) {
							setPage(1);
						} else {
							setPage((prev) => prev - 1);
						}
					}}
				>
					Previous
				</button>

				<button
					className={`bg-[#dc143c] p-4 w-24 rounded-lg text-white ${
						page === lastPage ? `invisible` : ``
					}`}
					onClick={() => {
						setPage((prev) => prev + 1);
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};
