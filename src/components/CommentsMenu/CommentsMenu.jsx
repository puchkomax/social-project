import React from 'react'
import './CommentsMenu.scss'

export const CommentsMenu = (props) => {
	return (
		<div className='comments-border' style={{ background: `${props.color} ` }}>
			{props.children}
		</div>
	)
}
