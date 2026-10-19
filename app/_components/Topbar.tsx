import styles from "./styles.module.css"

export default function Topbar({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop"]}>
        <div className={styles["container"]}>
          <div className={styles["name-menu"]}>
            <a className={styles["name"]} href="./">
              <div className={styles["div"]}>
                <p className={styles["p"]}>{slots[0] ?? "Luqman Yusuff"}</p>
              </div>
            </a>
          </div>
          <div className={styles["nav-icons"]}>
            <div className={styles["div-2"]}>
              <div className={styles["desktop-default"]}>
                <a className={styles["work"]} href="./works">
                  <div className={styles["div-3"]}>
                    <p className={styles["p-2"]}>{slots[1] ?? "Work"}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["div-6"]}>
            <a className={styles["primary"]} href="mailto:luqmanyusuff0@gmail.com">
              <div className={styles["div-7"]}>
                <p className={styles["p-5"]}>{slots[4] ?? "Contact me"}</p>
              </div>
            </a>
          </div>
        </div>
      </nav>
  )
}
