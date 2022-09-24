/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Article: React.FC<{ md: any }> = ({ md }) => {
	console.log('Article');
	return (
		<article>
			<ReactMarkdown
				className='tun-markdown'
				remarkPlugins={[remarkGfm]}
				components={{
					code({node, inline, className, children, ...props}) {
						// console.log(node, inline, className, children, props);
						return (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
				// components={{
				// 	code({node, inline, className, children, ...props}) {
				// 		const match = /language-(\w+)/.exec(className || '');
				// 		return !inline && match ? (
				// 			<SyntaxHighlighter
				// 				children={String(children).replace(/\n$/, '')}
				// 				language={match[1]}
				// 				style={dark as any}
				// 				PreTag="div"
				// 				{...props}
				// 			/>
				// 		) : (
				// 			<code className={className} {...props}>
				// 				{children}
				// 			</code>
				// 		);
				// 	},
				// }}
			>{md as string}</ReactMarkdown>
		</article>
	);
};
