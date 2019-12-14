import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	className: ''
};

export default function Signpost({className}) {
	return (
		<React.Fragment>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				x='0px'
				y='0px'
				viewBox='0 0 64 65'
				className={className}
				fill={'#303d70'}
		
			>
				<g>
					<rect x='1' y='61' width='2' height='2' />
					<rect x='61' y='61' width='2' height='2' />
					<rect x='31' y='39' width='2' height='2' />
					<rect x='37' y='39' width='2' height='2' />
					<rect x='25' y='39' width='2' height='2' />
					<path d='M46.6,54.8l-1.2-1.6c-0.94,0.705-1.739,1.561-2.4,2.509V51h-2v4.709c-0.66-0.948-1.46-1.804-2.4-2.509l-1.2,1.6   c1.986,1.49,3.264,3.756,3.541,6.2H35V45h10V35H35v-2h8.303l7.5-5l-7.5-5H35v-2h15v-5.414L48.414,14L50,12.414V7H35V4   c0-1.654-1.346-3-3-3s-3,1.346-3,3v3h-8.414l-7,7l7,7H29v2H14v4.414L14.586,28L14,28.586V33h15v2H19v10h10v16h-5.941   c0.277-2.444,1.555-4.71,3.541-6.2l-1.2-1.6c-0.94,0.705-1.739,1.561-2.4,2.509V51h-2v4.709c-0.66-0.948-1.46-1.804-2.4-2.509   l-1.2,1.6c1.986,1.49,3.264,3.756,3.541,6.2H5v2h54v-2H43.059C43.336,58.556,44.614,56.29,46.6,54.8z M31,4c0-0.552,0.449-1,1-1   s1,0.448,1,1v3h-2V4z M16.414,14l5-5H48v2.586L45.586,14L48,16.414V19H21.414L16.414,14z M31,21h2v2h-2V21z M16,29.414L17.414,28   L16,26.586V25h26.697l4.5,3l-4.5,3H16V29.414z M31,33h2v2h-2V33z M21,43v-6h22v6H21z M31,45h2v16h-2V45z' />
					<path d='M23,17h6v-6h-6V17z M25,13h2v2h-2V13z' />
					<rect x='31' y='11' width='13' height='2' />
					<rect x='31' y='15' width='2' height='2' />
					<rect x='35' y='15' width='9' height='2' />
					<rect x='40' y='27' width='2' height='2' />
					<rect x='20' y='27' width='18' height='2' />
				</g>
			</svg>
		</React.Fragment>
	);
}

Signpost.propTypes = propTypes;
Signpost.defaultProps = defaultProps;
