import React from 'react'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import './HomePage.scss'
import './navigation.scss'

export function HomePage() {
	return (
		<>
			<div className='HomePage'>
				<Header />
				<Main />
			</div>
			<Footer />
		</>
	)
}
