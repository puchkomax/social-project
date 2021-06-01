import React from 'react'
import map from '../../img/map.jpg'
import report from '../../img/report.jpg'

import './MapWrapper.scss'

export const MapWrapper = () => (
	<div className='map-wrapper'>
		<img src={map} alt='f' className='a' />
		<img src={report} alt='g' className='b' />
	</div>
)
