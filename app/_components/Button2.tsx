import styles from "./styles.module.css"

export default function Button2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary-2"]} href="mailto:luqmanyusuff0@gmail.com">
        <div className={styles["div-8"]}>
          <p className={styles["p-6"]}>{slots[0] ?? "Email Me"}</p>
        </div>
      </a>
  )
}
