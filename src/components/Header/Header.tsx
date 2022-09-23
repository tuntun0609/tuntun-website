import React, { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { LinkOutlined } from '@ant-design/icons';

import logo from '@public/tuntun.jpg';
import style from './Header.scss';

export interface HeaderProps {
	name: string,
	url: string,
	icon?: ReactNode,
	target?: HTMLAttributeAnchorTarget,
}

export const Header: React.FC<{items: HeaderProps[]}> = ({ items }) => (
	<div className={style.header}>
		<div className={style.logo}>
			<img className={style.img} src={logo} alt="tuntun-logo" />
			<div className={style.title}>Tun Website</div>
		</div>
		<div className={style.content}>
			{
				items.map(item => (
					<a key={item.name} rel='noreferrer' target={item.target ?? '_blank'} className={style.item} href={item.url}>
						<div className={style.text}>{item.name}</div>
						<div className={style.icon} >
							{item.icon ?? <LinkOutlined />}
						</div>
					</a>
				))
			}
		</div>
	</div>
);
