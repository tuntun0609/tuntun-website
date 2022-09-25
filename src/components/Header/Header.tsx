import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '@public/tuntun.jpg';
import style from './Header.scss';

export interface HeaderProps {
	name: string,
	icon?: ReactNode,
	aProps?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
}

export const Header: React.FC<{items: HeaderProps[]}> = ({ items }) => {
	const navigate = useNavigate();
	return (
		<div className={style.header}>
			<div className={style.logo} onClick={() => {
				navigate('/');
			}}>
				<img className={style.img} src={logo} alt="tuntun-logo" />
				<div className={style.title}>Tun Website</div>
			</div>
			<div className={style.content}>
				{
					items.map(item => (
						<a key={item.name} rel='noreferrer' className={style.item} {...item.aProps}>
							<div className={style.text}>{item.name}</div>
							{ item.icon ?
								<div className={style.icon} >
									{ item.icon }
								</div> : null }
						</a>
					))
				}
			</div>
		</div>
	);
};
