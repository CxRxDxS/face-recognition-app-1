import React from 'react';

const ImageLinkForm = ({ onInput, onSubmit }) => {
	return(
		<div className='tc'>
			<p className='f3'>
				{'This magic brain will detect faces in your picture, go ahead and give it a try!'}
			</p>
			<div>
				<div className='pa-4 br3 shadow-5'>
					<input className='f4 b--purple ph3 pv2 dib purple' type='text' onChange={onInput} /><br />
					<button className='f4 hover-bg-purple grow hover-white b--purple ba ph3 pv2 dib purple' onClick={onSubmit}>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;