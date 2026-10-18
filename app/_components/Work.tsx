import styles from "./styles.module.css"

export default function Work({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-2"]} href="./works/sendcore">
        <div className={styles["div-10"]}>
          <div className={styles["div-11"]}>
            <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/qVEfgtKv8pT3QzsKc8sf1Hbl0V4.png?scale-down-to=1024&width=8640&height=6144"} alt="" />
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["blur"]} />
          <div className={styles["div-12"]}>
            <p className={styles["p-7"]}>{slots[1] ?? "SendCore"}</p>
          </div>
          <div className={styles["tags"]}>
            <div className={styles["div-13"]}>
              <div className={styles["outlined"]}>
                <div className={styles["div-14"]}>
                  <p className={styles["p-8"]}>{slots[2] ?? "FinTech"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-15"]}>
              <div className={styles["outlined-2"]}>
                <div className={styles["div-16"]}>
                  <p className={styles["p-9"]}>{slots[3] ?? "Webapp"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
