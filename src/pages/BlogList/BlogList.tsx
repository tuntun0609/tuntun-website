import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { mdList } from '../blogPages';

import style from './BlogList.scss';

export const BlogList: React.FC = () => {
	console.log('BlogList');
	const navigate = useNavigate();
	return (
		<div className={style.main}>
			{
				mdList.map(item => (
					<Button key={item.key} onClick={() => {
						navigate(item.key);
					}}>test</Button>
				))
			}
		</div>
	);
};
