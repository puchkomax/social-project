import React from 'react'
import {
	VictoryChart,
	VictoryLine,
	VictoryTheme,
	VictoryAxis,
	VictoryGroup,
	VictoryScatter,
	VictoryLegend,
} from 'victory'
import './StatisticDiagram.scss'

export const StatisticDiagram = () => {
	const simpleData = [
		{ x: 1, y: 2 },
		{ x: 2, y: 3 },
		{ x: 3, y: 5 },
		{ x: 4, y: 4 },
		{ x: 5, y: 5 },
		{ x: 6, y: 5 },
		{ x: 7, y: 6 },
	]
	const anotherData = [
		{ x: 1, y: 3 },
		{ x: 3, y: 4 },
		{ x: 4, y: 5 },
		{ x: 5, y: 4 },
		{ x: 6, y: 6 },
		{ x: 7, y: 4 },
	]

	return (
		<div className='chart'>
			<VictoryChart
				theme={VictoryTheme.material}
				style={{
					background: { fill: '#34495d' },
					tickLabels: {
						fontSize: 7,
					},
				}}
				height={200}
				padding={{ top: 20, bottom: 90, right: 15, left: 43 }}
			>
				<VictoryAxis
					style={{
						tickLabels: {
							fontSize: 5,
							grid: { stroke: '#718096', strokeDasharray: '2 10' },
							color: '#fff',
						},
					}}
					tickFormat={[
						'',
						'12-6-14',
						'12-7-14',
						'12-8-14',
						'12-9-14',
						'12-10-14',
						'12-11-14',
					]}
				/>
				<VictoryAxis
					dependentAxis
					orientation='left'
					style={{ tickLabels: { fontSize: 5 } }}
					tickFormat={(x) => `$${x * 1000}`}
				/>
				<VictoryGroup data={simpleData}>
					<VictoryLine
						style={{
							data: { stroke: '#fac93e' },
							parent: { border: '1px solid #000' },
						}}
						data={simpleData}
					/>
					<VictoryScatter />
				</VictoryGroup>
				<VictoryGroup data={anotherData}>
					<VictoryLine
						style={{
							data: { stroke: '#4FFF01' },
							parent: { border: '1px solid #000' },
						}}
						data={anotherData}
					/>
					<VictoryScatter />
				</VictoryGroup>
				{/* <VictoryLegend
					x={125}
					y={50}
					orientation='horizontal'
					gutter={20}
					style={{ border: { stroke: 'black' } }}
					data={[
						{ name: 'One', symbol: { fill: 'tomato', type: 'star' } },
						{
							name: 'Two',
							symbol: { fill: 'orange' },
							labels: { fill: 'orange' },
						},
						{ name: 'Three', symbol: { fill: 'gold' } },
					]}
				/> */}
			</VictoryChart>
		</div>
	)
}
