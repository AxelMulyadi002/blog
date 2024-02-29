'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
	if (typeof window !== 'undefined') {
		const value = window.localStorage.getItem('theme');
		return value || 'light';
	}
};

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return getFromLocalStorage();
	});

	const [data, setData] = useState();

	const toggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark');
	};

	useEffect(() => {
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, []);

	const getData = async () => {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BLOG}`);
		const data = await response.json();
		setData(data);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
};
