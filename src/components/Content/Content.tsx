import React from 'react';
import { Route, Routes } from 'react-router-dom';

import style from './Content.scss';
import { Welcome, NotFind, BlogList, Blog, Project } from '@/pages';

export const Content: React.FC = () => {
	console.log('Content');
	return (
		<div className={style.main}>
			<Routes>
				<Route index element={<Welcome></Welcome>}></Route>
				<Route path='/project' element={<Project></Project>}></Route>
				<Route path="/blog" element={<BlogList />}></Route>
				<Route path="/blog/:key" element={<Blog></Blog>}></Route>
				<Route path="*" element={<NotFind />}></Route>
			</Routes>
		</div>
	);
};
