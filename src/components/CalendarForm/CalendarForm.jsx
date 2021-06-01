import React, { useState } from 'react'
import './CalendarForm.scss'

export const CalendarForm = () => {
	const [username, setUsername] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [isClose, setClose] = useState(false)

	return (
		<form className='calendar'>
			{!isClose && (
				<>
					<div className='calendar__container'>
						<h2 className='calendar__header'>Calendar</h2>
						<span
							className='calendar__close'
							onClick={() => {
								setClose(true)
							}}
						>
							X
						</span>
					</div>
					<input
						className='calendar__username'
						placeholder='Username'
						id='username'
						value={username}
						onChange={(event) => {
							setUsername(event.target.value)
						}}
					/>
					<input
						className='calendar__subject'
						placeholder='Subject'
						id='subject'
						name='subject'
						value={subject}
						onChange={(event) => {
							setSubject(event.target.value)
						}}
					/>
					<textarea
						className='calendar__message'
						placeholder='Message'
						id='message'
						name='message'
						value={message}
						onChange={(event) => {
							setMessage(event.target.value)
						}}
					/>
					<button
						className='calendar__button'
						onClick={(event) => {
							event.preventDefault()
						}}
					>
						SEND
					</button>
				</>
			)}
		</form>
	)
}
