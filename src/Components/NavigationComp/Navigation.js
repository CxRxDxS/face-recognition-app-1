import React from 'react';

const Navigation = ({ onRouteChange, signedIn }) => {
	if(signedIn){
	return(
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		<p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer white'>Sign out</p>
		</nav>
	);	
	} else {
		return(
			<div>
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer white'>Sign in</p>
				<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer white'>Register</p>
				</nav>
			</div>
		);
	}
}






export default Navigation;