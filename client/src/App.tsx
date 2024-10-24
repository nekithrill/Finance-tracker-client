import Sidebar from 'components/Sidebar/Sidebar'
import AccountPage from 'pages/AccountPage/AccountPage'
import GoalsPage from 'pages/GoalsPage/GoalsPage'
import HomePage from 'pages/HomePage/HomePage'
import ManagementPage from 'pages/ManagementPage/ManagementPage'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import 'styles/main.scss'

export default function App() {
	return (
		<>
			<div className='app'>
				<div className='container'>
					<Sidebar />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/account' element={<AccountPage />} />
						<Route path='/management' element={<ManagementPage />} />
						<Route path='/goals' element={<GoalsPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</>
	)
}
