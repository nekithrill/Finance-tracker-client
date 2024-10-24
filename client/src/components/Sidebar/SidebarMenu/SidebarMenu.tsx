import AccountPanel from 'components/Account/AccountPanel/AccountPanel'
import { NavLink } from 'react-router-dom'
import styles from './SidebarMenu.module.scss'

const SidebarMenu = () => {
	return (
		<>
			<div className={styles['sidebar-menu']}>
				<NavLink to='/account'>
					<AccountPanel />
				</NavLink>

				<ul>
					<NavLink to='/'>
						<li>Home</li>
					</NavLink>

					<NavLink to='/management'>
						<li>Management</li>
					</NavLink>

					<NavLink to='/goals'>
						<li>Savings / Goals</li>
					</NavLink>
				</ul>
			</div>
		</>
	)
}

export default SidebarMenu
