import React from 'react'
import { CommentsMenu } from '../CommentsMenu'
import { UserDetailComment } from '../UserDetailComment'

import './Comment.scss'

export const Comment = () => {
	return (
		<div className='comment'>
			<div className='comment__menu'>
				<CommentsMenu color='#34495D'>
					<h2>Latest Comments</h2>
				</CommentsMenu>

				<CommentsMenu color='#F1C410'>
					<h2>Latest Articlase</h2>
				</CommentsMenu>

				<CommentsMenu color='#8E44AD'>
					<h2>Newest Users</h2>
				</CommentsMenu>
			</div>

			<UserDetailComment />
		</div>
	)
}
