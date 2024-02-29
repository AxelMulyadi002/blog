'use client';

import { Pagination } from '@/components/pagination/Pagination';
import { RecentPost } from '@/components/recentPost/RecentPost';
import React from 'react';

import { useState, useEffect } from 'react';

const Page = () => {
	const [val, setVal] = useState([]);
	const [page, setPage] = useState(1);

	const scrollTop = () => {
		scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		scrollTop();

		const getFetch = async () => {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_BLOG}?populate=*&pagination[page]=${page}&pagination[pageSize]=3&sort=id:desc`
			);
			const data = await response.json();
			setVal(data);
		};
		getFetch();
	}, [page]);

	return (
		<div>
			<RecentPost api={val} />
			<Pagination
				setPage={setPage}
				page={page}
				lastPage={val.meta?.pagination.pageCount}
			/>
		</div>
	);
};

export default Page;
