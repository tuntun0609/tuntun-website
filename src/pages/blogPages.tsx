import React from 'react';
// import { compiler } from 'markdown-to-jsx';

// import { Article } from '../components';
import * as md from '@/md';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { compiler } from 'markdown-to-jsx';

export interface mdListItem {
	key: string,
	render: React.ReactNode,
	title?: React.ReactNode,
	desc?: React.ReactNode,
}

const isInfoReg = /^---\n((.|\n|\t)*)\n---$/m;

const Code = ({className, children} : { className: string, children: any }) => {
	const language = className?.replace('lang-', '') ?? 'javascript';
	return (
		<SyntaxHighlighter style={monokai} language={language}>
			{children}
		</SyntaxHighlighter>
	);
};

const getPageRouter = (mds: any) => {
	const mdList: mdListItem[] = [];
	for (const key in mds) {
		if (Object.prototype.hasOwnProperty.call(mds, key)) {
			const item = mds[key];
			const mdData = compiler(item, {
				wrapper: null,
				overrides: {
					code: Code,
					a: ({...props}) => (
						<a target={'_blank'} rel='noreferrer' {...props}></a>
					),
				},
			});
			const [ firstElement ] = (mdData as unknown as React.ReactElement[]);
			if (firstElement.type === 'p' && isInfoReg.test(firstElement.props.children[0])) {
				const mdInfo = isInfoReg.exec(firstElement.props.children[0])[1].split('\n').map(item => (
					item.split(':')
				));
				mdList.push({
					key: mdInfo.find(item => item[0] === 'key')[1].trim(),
					title: mdInfo.find(item => item[0] === 'title')?.[1]?.trim(),
					desc: mdInfo.find(item => item[0] === 'desc')?.[1]?.trim(),
					render: (mdData as unknown as React.ReactElement[]).slice(1),
				});
			} else {
				mdList.push({
					key,
					title: key,
					render: mdData,
				});
			}
		}
	}
	return mdList;
};

export const mdList: mdListItem[] = getPageRouter(md);

// export const mdList: mdListItem[] = [
// 	{
// 		key: 'forin-or-forof',
// 		title: 'for in ε for of ηεΊε«',
// 		desc: 'test',
// 		render: <Article md={testMd}></Article>,
// 	},
// 	{
// 		key: 'book',
// 		title: 'εη«―δΉ¦η±',
// 		desc: 'εη«―εΈΈθ―»δΉ¦η±ζ΄ηοΌε€§ι¨εζδΎδΊδΈθ½½ιΎζ₯',
// 		render: <Article md={bookMd}></Article>,
// 	},
// ];
