import React from 'react'
import { Featured } from '../Featured'
import { AllOther } from '../AllOther'
import { NavigationPanel } from '../NavigationPanel'
import './Navigation.scss'

export function Navigation() {
	return (
		<nav className='header__navbar nav'>
			<NavigationPanel />
			<Featured />
			<AllOther />
		</nav>
	)
}
