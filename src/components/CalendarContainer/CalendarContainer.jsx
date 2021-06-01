import React, { useState } from 'react'
import { CalendarForm } from '../CalendarForm'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import './CalendarContainer.scss'

export const CalendarContainer = () => {
	const [value, onChange] = useState(new Date())
	return (
		<div className='calendar-component'>
			<CalendarForm />
			<Calendar onChange={onChange} value={value} />
		</div>
	)
}
