import styles from './Sidebar.module.scss'
import SidebarFooter from './SidebarFooter/SidebarFooter'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarMenu from './SidebarMenu/SidebarMenu'

const Sidebar = () => {
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

export default Sidebar;
