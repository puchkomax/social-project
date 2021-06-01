import React from 'react'
import './DashboardItem.scss'

export const DashboardItem = (props) => {
	return <div className='dashboard__item'>{props.children}</div>
}
