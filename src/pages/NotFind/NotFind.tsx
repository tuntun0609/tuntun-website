import React from 'react';

export const NotFind: React.FC = () => {
	console.log('NotFind');
	return (
		<div style={{
			width: '100vw',
			height: 'calc(100vh - 84px)',
			zIndex: 1,
			position: 'fixed',
			top: '84px',
			left: 0,
			backgroundColor: 'white',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: '96px',
		}}>
			<div style={{
				marginBottom: '2em',
				letterSpacing: '0.15em',
			}}>
				404
			</div>
		</div>
	);
};
