import React from 'react'
import { Total } from '../Total'
import './SiteStatistic.scss'

export const SiteStatistic = () => {
	return (
		<section className='total'>
			<Total>
				<div className='total__visitor visitor'>
					<h3 className='visitor__header'>
						TOTAL <strong>VISITOR</strong>
					</h3>
					<div className='visitor__count'>14 000</div>
					<div className='visitor__suptitle'>10% New Today</div>
				</div>
			</Total>
			<Total>
				<div className='total__sale sale'>
					<h3 className='sale__header'>
						TOTAL <strong>SALE</strong>
					</h3>
					<div className='sale__count'>14 000</div>
					<div className='sale__suptitle'>10% New Today</div>
				</div>
			</Total>
			<Total>
				<div className='total__user'>
					<h3 className='user__header'>
						TOTAL <strong>USER</strong>
					</h3>
					<div className='user__count'>14 000</div>
					<div className='user__suptitle'>470 New Today</div>
				</div>
			</Total>
		</section>
	)
}
