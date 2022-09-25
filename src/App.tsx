/* eslint-disable react/no-children-prop */
import React from 'react';
import { YoutubeOutlined, LinkOutlined, YuqueOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
	Header, HeaderProps,
	Content, BgRibbon,
} from './components';
import style from './App.scss';
import './markdown.scss';

const App: React.FC = () => {
	const navigate = useNavigate();
	const HeaderItems: HeaderProps[] = [
		{
			name: 'Home',
			aProps: {
				onClick: (e) => {
					e.preventDefault();
					navigate('/');
				},
			},
		},
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
			name: 'Yuque',
			icon: <YuqueOutlined />,
			aProps: {
				href: 'https://www.yuque.com/webknowledge',
				target: '_blank',
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
			name: 'Bilibili',
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
				<BgRibbon ribbonWidth={75} globalAlpha={0.2} clickChangeDom={document}></BgRibbon>
			</div>
		</>
	);
};

export default App;
