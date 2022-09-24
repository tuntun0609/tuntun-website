import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import style from './Welcome.scss';

import { Article } from '@/components';
import welcome from '@/md/welcome.md';

export const Welcome: React.FC = () => {
	const el = useRef(null);
	const typed = useRef(null);
	useEffect(() => {
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

		typed.current = new Typed(el.current, options);

		return () => {
			typed.current.destroy();
		};
	}, []);
	return (
		<div className={style.main}>
			<div className={style.welcome}>Welcome!</div>
			<span style={{ whiteSpace: 'pre' }} ref={el} />
			<Article md={welcome}></Article>
		</div>
	);
};
