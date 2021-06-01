import React from 'react'
import { usersCommentsInfo } from '../../data/userData.json'
import './UserDetailComment.scss'

export const UserDetailComment = () => {
	return (
		<ul className='comment__details details'>
			{usersCommentsInfo.map((comment) => (
				<li className='details__container'>
					<div>
						<img className='details__photo' src={comment.userPhoto} alt='' />
					</div>
					<div className='details__text-info'>
						<div className='details__header'>
							<h2>{comment.company}</h2>
						</div>
						<span>{comment.time}</span>
						<div className='details__description'>
							{comment.descriptionComment}
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}
