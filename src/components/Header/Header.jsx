import React from 'react'
import './Header.scss'
import { Navigation } from '../Navigation'

export function Header() {
	return (
		<header className='header'>
			<div className='header__logo-menu'>
				Metro <i>panel</i>
			</div>
			<Navigation />
		</header>
	)
}
