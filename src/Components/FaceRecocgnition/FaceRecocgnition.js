import React from 'react';
import './Face.css';


const FaceRecocgnition = ({ imageUrl, box }) => {
	return(
		<div className='center' id='faceimage'>
			<div className='tc ma mt2'>
				<div className='center tc absolute center'>
					<img id='inputimage' src={imageUrl} className='inputimage' alt='' width='500px' height='auto' />
						<div class='bounding-box' style={{top: box.topRow, left: box.leftCol, 
						right: box.rightCol, bottom: box.bottomRow}}>
						</div>
				</div>
			</div>
		</div>
	);
}

export default FaceRecocgnition;