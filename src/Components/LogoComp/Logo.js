import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';



const Logo = () => {
	return(
		<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
 			<div className="Tilt-inner">
 				<span>
 					<img src="https://image.flaticon.com/icons/svg/170/170082.svg" alt='Logo' /> 
 				</span>
 			</div>
		</Tilt>
		</div>
	);
}

export default Logo;