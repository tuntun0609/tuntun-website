/* eslint-disable react/no-children-prop */
import React from 'react';
import { YoutubeOutlined } from '@ant-design/icons';

import {
	Header, HeaderProps,
	Content,
} from './components';
// import style from './App.scss';
import './markdown.scss';

const HeaderItems: HeaderProps[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/tuntun0609',
	},
	{
		name: 'bilibili',
		url: 'https://space.bilibili.com/47706697',
		icon: <YoutubeOutlined />,
	},
];

const App: React.FC = () => {
	console.log('app');
	return (
		<div>
			<Header items={HeaderItems}></Header>
			<Content></Content>
		</div>
	);
};

export default App;
