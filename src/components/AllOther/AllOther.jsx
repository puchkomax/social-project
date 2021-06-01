/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

// svg files for project

import revenue from '../../img/coins.png'
import picture from '../../img/image.png'
import faqs from '../../img/information.png'

export function AllOther() {
	return (
		<section className='nav__bar'>
			<h3 className='nav__header'>All Other</h3>
			<ul className='header__navigation navigation'>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object
							data={revenue}
							type=''
							className='navigation__icon'
						></object>
						<Link to='/revenue' className='navigation__link'>
							Revenue
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object
							data={picture}
							type=''
							className='navigation__icon'
						></object>
						<Link to='/pictures' className='navigation__link'>
							Pictures
						</Link>
					</div>
				</li>
				<li className='navigation__item'>
					<div className='navigation__contain'>
						<object data={faqs} type='' className='navigation__icon'></object>
						<Link to='/faqs' className='navigation__link'>
							FAQs
						</Link>
					</div>
				</li>
			</ul>
		</section>
	)
}
