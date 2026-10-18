import styles from "./styles.module.css"

export default function Button({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary"]} href="mailto:luqmanyusuff0@gmail.com">
        <div className={styles["div-7"]}>
          <p className={styles["p-5"]}>{slots[0] ?? "Contact me"}</p>
        </div>
      </a>
  )
}
