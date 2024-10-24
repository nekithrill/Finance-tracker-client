import styles from './SidebarFooter.module.scss'

export default function SidebarFooter() {
	return (
		<>
			<div className={styles.footer}>
				<p>Copyright</p>
				<p>Version</p>
				<button>Privacy</button>
				<button>Policy</button>
			</div>
		</>
	)
}
