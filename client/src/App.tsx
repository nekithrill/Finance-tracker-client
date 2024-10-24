import Sidebar from 'components/Sidebar/Sidebar'
import AccountPage from 'pages/AccountPage/AccountPage'
import ManagementPage from 'pages/BillsPage/ManagementPage'
import GoalsPage from 'pages/GoalsPage/GoalsPage'
import HomePage from 'pages/HomePage/HomePage'
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
