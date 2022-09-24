/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';

import style from './Welcome.scss';
import 'vditor/dist/index.css';

import { Article, TypedWriter } from '@/components';
import welcome from '@/md/welcome.md';

export const Welcome: React.FC = () => {
	const el = useRef(null);
	const typed = useRef(null);
	const options = {
		strings: [
			'Hi, I am TunTun',
			'A Web front-end developer',
		],
		typeSpeed: 50,
		backSpeed: 30,
		loop: true,
		loopCount: Infinity,
	};
	return (
		<div className={style.main}>
			<div className={style.welcome}>Welcome!</div>
			<TypedWriter
				style={{
					whiteSpace: 'pre',
					color: 'rgb(85, 85, 85)',
					padding: '1.3em 0',
				}}
				options={options}
			></TypedWriter>
			<Article md={welcome}></Article>
		</div>
	);
};
