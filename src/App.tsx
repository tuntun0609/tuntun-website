/* eslint-disable react/no-children-prop */
import React from 'react';
import { YoutubeOutlined, LinkOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
	Header, HeaderProps,
	Content,
} from './components';
import style from './App.scss';
import './markdown.scss';

const App: React.FC = () => {
	const navigate = useNavigate();
	const HeaderItems: HeaderProps[] = [
		{
			name: 'Project',
			aProps: {
				onClick: (e) => {
					e.preventDefault();
					navigate('/project');
				},
			},
		},
		{
			name: 'Blog',
			aProps: {
				onClick: (e) => {
					e.preventDefault();
					navigate('/blog');
				},
			},
		},
		{
			name: 'GitHub',
			icon: <LinkOutlined />,
			aProps: {
				href: 'https://github.com/tuntun0609',
				target: '_blank',
			},
		},
		{
			name: 'bilibili',
			icon: <YoutubeOutlined />,
			aProps: {
				href: 'https://space.bilibili.com/47706697',
				target: '_blank',
			},
		},
	];
	return (
		<>
			<div className={style.main}>
				<Header items={HeaderItems}></Header>
				<Content></Content>
			</div>
		</>
	);
};

export default App;
