import React from 'react';
import PmRibbon from 'pm-ribbon';

interface RibbonType {
	ribbonWidth?: number,
	globalAlpha?: number,
	zIndex?: number,
	canClickChange?: boolean,
	clickChangeDom?: HTMLElement | Document | null,
	drawSite?: [number, number],
}

export const BgRibbon: React.FC<RibbonType> = props => (
	<div style={{
		width: '100vw',
		height: 'calc(100vh - 84px)',
		zIndex: -1,
		position: 'fixed',
		top: '84px',
		left: 0,
	}}>
		<PmRibbon {...props}/>
	</div>
);
