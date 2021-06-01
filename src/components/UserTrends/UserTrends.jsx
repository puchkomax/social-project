import React from 'react'
import blue from '../../img/userImages/Usertrends.jpg'
import sale from '../../img/userImages/todaySale.jpg'

import './UserTrends.scss'

export const UserTrends = () => {
	return (
		<div className='diagram__container'>
			<img className='user-sale' src={sale} alt='' />
			<img className='user-trends' src={blue} alt='' />
		</div>
	)
}
