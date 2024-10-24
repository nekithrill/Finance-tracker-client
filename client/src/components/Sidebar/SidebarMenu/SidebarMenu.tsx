import { NavLink } from 'react-router-dom'

export default function SidebarMenu() {
	return (
		<>
			<div className='menu'>
				<ul>
					<NavLink to='/'>
						<li>Home</li>
					</NavLink>

					<NavLink to='/account'>
						<li>Account</li>
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
