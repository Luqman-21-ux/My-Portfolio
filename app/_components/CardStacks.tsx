import styles from "./styles.module.css"

export default function CardStacks({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["prominent"]}>
        <div className={styles["div-18"]}>
          <div className={styles["div-19"]}>
            <img className={styles["img-2"]} src={slots[0] ?? "https://framerusercontent.com/images/Bhdea81oiDTPBPVoo8pCk45ReM.png?width=480&height=480"} alt="" />
          </div>
        </div>
        <div className={styles["text-wrapper"]}>
          <div className={styles["div-20"]}>
            <p className={styles["p-10"]}>{slots[1] ?? "Figma"}</p>
          </div>
          <div className={styles["div-21"]}>
            <p className={styles["p-11"]}>{slots[2] ?? "A powerful design tool for creating intuitive user interfaces"}</p>
          </div>
        </div>
      </div>
  )
}
