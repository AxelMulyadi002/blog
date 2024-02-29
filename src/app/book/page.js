'use client';

import { Pagination } from '@/components/pagination/Pagination';
import { RecentPost } from '@/components/recentPost/RecentPost';
import React from 'react';
import { useEffect, useState } from 'react';

const Page = () => {
	const [val, setVal] = useState([]);
	const [page, setPage] = useState(1);

	const getFetch = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BLOG}?populate=*&pagination[page]=${page}&pagination[pageSize]=3&sort=id:desc&filters[field][$eq]=book`
		);
		const data = await response.json();
		setVal(data);
	};

	const scrollTop = () => {
		scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		scrollTop();
	}, []);

	useEffect(() => {
		getFetch();
	}, [page]);

	return (
		<div className="mt-10">
			<div className="border p-2 text-center text-2xl bg-[#ff7f50] font-extrabold">
				<h1>Book Blog</h1>
			</div>

			<RecentPost api={val} />
			{/* <Pagination /> */}
		</div>
	);
};

export default Page;
