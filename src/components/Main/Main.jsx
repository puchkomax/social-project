import React from 'react'
import { HomeMenu } from '../HomeMenu'
import { SiteStatistic } from '../SiteStatistic'
import { StatisticDiagram } from '../StatisticDiagram'
import { CalendarContainer } from '../CalendarContainer'
import { UserTrends } from '../UserTrends'
import { Comment } from '../Comment'
import './Main.scss'
import { MapWrapper } from '../MapWrapper'

export const Main = () => {
	return (
		<main className='main'>
			<HomeMenu />
			<SiteStatistic />
			<StatisticDiagram />
			<MapWrapper />
			<UserTrends />
			<CalendarContainer />
			<Comment />
		</main>
	)
}
