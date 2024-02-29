import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import { ThemeContextProvider } from '@/components/context/ThemeContext';
import { Pagination } from '@/components/pagination/Pagination';
import { Footer } from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Created by Axel Mulyadi',
	description: 'Blog post',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" id="darkmode">
			<body
				className={`${inter.className} dark:bg-[#0f172a] dark:text-white bg-white top-0 bottom-0 relative h-[100vh]`}
			>
				<ThemeContextProvider>
					<Navbar />
					{children}
					<Footer />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
