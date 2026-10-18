import styles from "./styles.module.css"

export default function BuildingBlockPulse({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["state-2"]}>
        <div className={styles["indicator-pulse"]} />
        <div className={styles["outer-circle"]} />
      </div>
  )
}
