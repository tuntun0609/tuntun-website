import React from 'react';
import { useParams } from 'react-router-dom';

import style from './Blog.scss';
import { mdList } from '../blogPages';
import { NotFind } from '@/pages';

export const Blog: React.FC = () => {
	const { key } = useParams();
	const render = mdList.find(item => item.key === key)?.render;
	return (
		render ?
			<div className={style.main}>
				{ render }
			</div> :
			<NotFind></NotFind>
	);
};
