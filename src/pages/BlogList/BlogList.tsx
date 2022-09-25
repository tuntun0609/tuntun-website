import React from 'react';
import { Row, Col, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import { mdList, mdListItem } from '../blogPages';

import style from './BlogList.scss';

const BlogItem = ({ data }: { data: mdListItem }) => {
	const navigate = useNavigate();
	return (
		<Col span={12}>
			<Card
				hoverable
				onClick={() => {
					navigate(data.key);
				}}
				style={{
					borderRadius: '10px',
					height: '100%',
				}}
			>
				<div
					title={data.title ? data.title.toString() : data.key}
					className={style.itemTitle}
				>{ data.title ?? data.key }</div>
				<div className={style.itemContent}>
					{
						data.desc ? <span className={style.itemDesc}>{ data.desc }</span> : null
					}
				</div>
			</Card>
		</Col>
	);
};

export const BlogList: React.FC = () => {
	console.log('BlogList');
	return (
		<div className={style.main}>
			<Row gutter={[12, 8]} wrap>
				{
					mdList.map(item => (
						<BlogItem key={item.key} data={item}></BlogItem>
					))
				}
			</Row>
		</div>
	);
};
