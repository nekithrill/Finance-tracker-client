import AccountButton from './AccountButton/AccountButton'
import styles from './AccountPanel.module.scss'
import UserBar from './UserBar/UserBar'

const AccountPanel: React.FC = () => {
	return (
		<>
			<div className={styles['account-panel']}>
				<UserBar />
				<AccountButton />
			</div>
		</>
	)
}

export default AccountPanel
