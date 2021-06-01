/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

// svg photos for project
import dashboard from '../../img/dashboard.png'
import email from '../../img/mail.png'
import calendar from '../../img/calendar.png'
import pages from '../../img/file.png'

export function NavigationPanel() {
	return (
		<section className='nav__bar'>
			<h3 className='nav__header'>Navigation</h3>
			<ul className='nav__navigation navigation'>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={dashboard} className='navigation__icon'></object>
						<Link to='/dashboard' className='navigation__link'>
							Dashboard
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object
							data={email}
							alt='email'
							className='navigation__icon'
						></object>
						<Link to='emails' className='navigation__link'>
							Emails
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object
							data={calendar}
							alt='dashboard'
							className='navigation__icon'
						></object>
						<Link to='/calendar' className='navigation__link'>
							Calendar
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object
							data={pages}
							alt='dashboard'
							className='navigation__icon'
						></object>
						<Link to='/pages' className='navigation__link'>
							Pages
						</Link>
					</div>
				</li>
			</ul>
		</section>
	)
}
