/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { DashboardItem } from '../DashboardItem'
import './HomeMenu.scss'
import searchIcon from '../../img/dashboard/searching.png'
import classNames from 'classnames'

import userSettings from '../../img/dashboard/user-setting.png'
import userIcon from '../../img/dashboard/profile-user.png'
import userRefreshPage from '../../img/dashboard/refresh.png'
import userNotification from '../../img/dashboard/bell.png'
import userMessage from '../../img/dashboard/email.png'

// data
import { users } from '../../data/data.json'

export const HomeMenu = () => {
	const [isClick, setClick] = useState(false)
	const [searchText, setSearchText] = useState('')
	const [user, setUser] = useState(null)

	useEffect(() => {
		users.forEach((user) => {
			if (user.userId === '1') {
				setUser(user)
			}
		})
	}, [])

	function slowEffect(boolValue) {
		setClick(boolValue)
	}

	function readSearchData(event) {
		setSearchText(event.target.value)
	}

	return (
		<>
			<section className='main__dashboard dashboard'>
				<DashboardItem>
					<div className='dashboard__notification notification'>
						<div className='dashboard__bar'>
							<object
								data={userRefreshPage}
								className='notification__icon'
							></object>
						</div>
						<div className='dashboard__bar'>
							<object
								data={userMessage}
								className='notification__icon'
							></object>
							<label className='notification__badge message'>1</label>
						</div>
						<div className='dashboard__bar'>
							<object
								data={userNotification}
								className='notification__icon'
							></object>
							<label className='notification__badge notify'>1</label>
						</div>
					</div>
				</DashboardItem>
				<DashboardItem>
					<div className='dashboard__bar'>
						<object
							data={searchIcon}
							className={classNames(
								{ dashboard__icon: !isClick },
								{
									isActive: isClick,
								}
							)}
						></object>
						<input
							type='text'
							value={searchText}
							className='dashboard__search-menu'
							id='search'
							onChange={readSearchData}
							onFocus={() => {
								slowEffect(true)
							}}
							onBlur={() => {
								slowEffect(false)
							}}
						/>
					</div>
				</DashboardItem>
				<DashboardItem>
					<div className='dashboard__user user'>
						{user && (
							<div className='user__bar'>
								<object data={userSettings} className='user__setting'></object>
								<div className='user__test'>
									<object data={userIcon} className='user__icon'></object>
								</div>
								<div className='user__account'>
									<span className='user__name'>
										{user.name + ' ' + user.secondName}
									</span>
								</div>
							</div>
						)}
					</div>
				</DashboardItem>
			</section>

			<div className='dashboard__underline'>{'Home > Dashboard'}</div>
		</>
	)
}
