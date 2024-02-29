import { Categories } from '@/components/categories/Categories';
import { Featured } from '@/components/featured/Featured';
import { Pagination } from '@/components/pagination/Pagination';
import { ReadMore } from '@/components/readMore/ReadMore';
import { RecentPost } from '@/components/recentPost/RecentPost';

export default async function Home() {
	const getFetch = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BLOG}?populate=*&pagination[page]=1&pagination[pageSize]=2&sort=id:desc`
		);
		const data = await response.json();
		return data;
	};

	const data = await getFetch();

	return (
		<div>
			<Featured api={data} />
			<Categories />
			<RecentPost api={data} />
			<ReadMore />
		</div>
	);
}
