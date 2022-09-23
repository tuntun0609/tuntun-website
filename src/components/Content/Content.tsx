import React from 'react';

import { Article } from '../Article/Article';

import style from './Content.scss';

import testMd from '../../md/test.md';

export const Content: React.FC = () => {
	console.log('Content');
	return (
		<div className={style.main}>
			<Article md={testMd}></Article>
		</div>
	);
};
