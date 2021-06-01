import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import './App.scss'

function App() {
	return (
		<Switch>
			<Route path='/' exact>
				<HomePage />
			</Route>
		</Switch>
	)
}

export default App
