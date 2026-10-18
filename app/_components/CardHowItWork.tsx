import styles from "./styles.module.css"

export default function CardHowItWork({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-6"]}>
        <div className={styles["no"]}>
          <div className={styles["div-57"]}>
            <p className={styles["p-28"]}>{slots[0] ?? "1"}</p>
          </div>
        </div>
        <div className={styles["text"]}>
          <div className={styles["div-58"]}>
            <p className={styles["p-29"]}>{slots[1] ?? "Define the Problem"}</p>
          </div>
          <div className={styles["div-59"]}>
            <p className={styles["p-30"]}>{slots[2] ?? "Understand the business goal, user pain points, product context, competitors, constraints, and success metrics before jumping into visuals."}</p>
          </div>
        </div>
      </div>
  )
}
