import styles from './ManagementPage.module.scss'
import Bills from "components/Bills/Bills.tsx";
import Operations from "components/Operations/Operations.tsx";
import Filter from "components/Filter/Filter.tsx";

export default function ManagementPage() {
	return (
		<>
			<div className={styles.management}>
				<Bills />
				<div className={styles.management__bottom}>
					<Operations />
					<Filter />
				</div>
			</div>
		</>
	)
}
