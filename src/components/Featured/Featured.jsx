/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

// svg for project
import charts from '../../img/bar-chart.png'
import article from '../../img/writing.png'
import users from '../../img/group.png'
import favotites from '../../img/star.png'
import speed from '../../img/speedometer.png'
import settings from '../../img/settings.png'

export function Featured() {
	return (
		<section className='nav__bar'>
			<h3 className='nav__header'>Featured</h3>
			<ul className='header__navigation navigation'>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={charts} className='navigation__icon'></object>
						<Link to='/charts' className='navigation__link'>
							Charts
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={article} className='navigation__icon'></object>
						<Link to='/articals' className='navigation__link'>
							Articals
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={users} className='navigation__icon'></object>
						<Link to='/users' className='navigation__link'>
							Users
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={favotites} className='navigation__icon'></object>
						<Link to='/favorites' className='navigation__link'>
							Favorites
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={speed} className='navigation__icon'></object>
						<Link to='/speed' className='navigation__link'>
							Speed
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={settings} className='navigation__icon'></object>
						<Link to='/settings' className='navigation__link'>
							Settings
						</Link>
					</div>
				</li>
			</ul>
		</section>
	)
}
