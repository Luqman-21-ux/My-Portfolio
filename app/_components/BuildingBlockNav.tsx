import styles from "./styles.module.css"

export default function BuildingBlockNav({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-default"]}>
        <a className={styles["work"]} href="./works">
          <div className={styles["div-3"]}>
            <p className={styles["p-2"]}>{slots[0] ?? "Work"}</p>
          </div>
        </a>
        <a className={styles["about"]} href="./about">
          <div className={styles["div-4"]}>
            <p className={styles["p-3"]}>{slots[1] ?? "About"}</p>
          </div>
        </a>
        <a className={styles["contact"]} href="./contact">
          <div className={styles["div-5"]}>
            <p className={styles["p-4"]}>{slots[2] ?? "Contact"}</p>
          </div>
        </a>
      </div>
  )
}
