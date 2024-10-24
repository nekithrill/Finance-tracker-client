import styles from './Sidebar.module.scss'
import SidebarFooter from './SidebarFooter/SidebarFooter'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarMenu from './SidebarMenu/SidebarMenu'

export default function Sidebar() {
	return (
		<>
			<div className={styles.sidebar}>
				<SidebarHeader />
				<SidebarMenu />
				<SidebarFooter />
			</div>
		</>
	)
}
