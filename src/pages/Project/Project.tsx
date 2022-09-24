import React from 'react';

import style from './Project.scss';

import { Article } from '@/components';
import prject from '@/md/project.md';

export const Project: React.FC = () => (
	<div className={style.main}>
		<Article md={prject}></Article>
	</div>
);
