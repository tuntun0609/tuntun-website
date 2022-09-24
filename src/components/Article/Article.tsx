import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import remarkMdx from 'remark-mdx';
import Markdown from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({className, children} : { className: string, children: any }) => {
	const language = className?.replace('lang-', '') ?? 'javascript';
	return (
		<SyntaxHighlighter style={monokai} language={language}>
			{children}
		</SyntaxHighlighter>
	);
};

export const Article: React.FC<{ md: any }> = ({ md }) => {
	console.log('Article');
	return (
		<article>
			{/* <ReactMarkdown
				className='tun-markdown'
				remarkPlugins={[
					remarkGfm,
					remarkMdx,
				]}
				components={{
					code({node, inline, className, children, ...props}) {
						return (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
					a({node, href, children}) {
						return (
							<a target='_blank' href={href} rel="noreferrer">{children}</a>
						);
					},
					img({alt, src, node}) {
						console.log(node);
						return (
							<img alt={alt} src={src}></img>
						);
					},
				}}
			>{md as string}</ReactMarkdown> */}
			<div className='tun-markdown'>
				<Markdown
					options={{
						overrides: {
							code: Code,
							a: ({...props}) => (
								<a target={'_blank'} rel='noreferrer' {...props}></a>
							),
						},
					}}
				>{md as string}</Markdown>
			</div>
		</article>
	);
};
