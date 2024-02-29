'use client';

import { Pagination } from '@/components/pagination/Pagination';
import { RecentPost } from '@/components/recentPost/RecentPost';
import { useState, useEffect } from 'react';
import React from 'react';

const Page = () => {
	const [val, setVal] = useState([]);
	const [page, setPage] = useState(1);

	const getFetch = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BLOG}?populate=*&sort=id:desc&filters[field][$eq]=daily`
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
		getFetch();
	}, []);

	return (
		<div className="mt-10">
			<div className="border p-2 text-center text-2xl bg-[#ff7f50] font-extrabold">
				<h1 className="daily">Daily Blog</h1>
			</div>

			<RecentPost api={val} />
			{/* <Pagination /> */}
		</div>
	);
};

export default Page;
