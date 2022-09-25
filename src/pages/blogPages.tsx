import React from 'react';

import { Article } from '../components';

import testMd from '@/md/test.md';
import bookMd from '@/md/book.md';

export interface mdListItem {
	key: string,
	render: React.ReactNode,
	title?: React.ReactNode,
	desc?: React.ReactNode,
}

export const mdList: mdListItem[] = [
	{
		key: 'forin-or-forof',
		title: 'for in 和 for of 的区别',
		desc: 'test',
		render: <Article md={testMd}></Article>,
	},
	{
		key: 'book',
		title: '前端书籍',
		desc: '前端常读书籍整理，大部分提供了下载链接',
		render: <Article md={bookMd}></Article>,
	},
];
