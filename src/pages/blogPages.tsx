import React from 'react';

import { Article } from '../components';

import testMd from '@/md/test.md';

export const mdList: {
	key: string,
	render: React.ReactNode,
}[] = [
	{
		key: 'test',
		render: <Article md={testMd}></Article>,
	},
];
