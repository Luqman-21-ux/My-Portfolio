import styles from "./styles.module.css"

export default function SectionMyStacks({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-3"]}>
        <div className={styles["div-17"]}>
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
        </div>
        <div className={styles["div-22"]}>
          <div className={styles["default"]}>
            <div className={styles["div-18"]}>
              <div className={styles["div-19"]}>
                <img className={styles["img-2"]} src={slots[3] ?? "https://framerusercontent.com/images/Nf63tXddU52SRtJJgRHqk7zzD2g.png?width=480&height=480"} alt="" />
              </div>
            </div>
            <div className={styles["text-wrapper"]}>
              <div className={styles["div-20"]}>
                <p className={styles["p-12"]}>{slots[4] ?? "Framer"}</p>
              </div>
              <div className={styles["div-21"]}>
                <p className={styles["p-13"]}>{slots[5] ?? "My main tool for building interactive websites"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-17"]}>
          <div className={styles["default"]}>
            <div className={styles["div-18"]}>
              <div className={styles["div-19"]}>
                <img className={styles["img-3"]} src={slots[6] ?? "https://framerusercontent.com/images/VCZMoMHexjx0t0rw5gr0T52rnU.png?width=400&height=300"} alt="" />
              </div>
            </div>
            <div className={styles["text-wrapper"]}>
              <div className={styles["div-20"]}>
                <p className={styles["p-12"]}>{slots[7] ?? "Rive"}</p>
              </div>
              <div className={styles["div-21"]}>
                <p className={styles["p-13"]}>{slots[8] ?? "Design, animate, and code interactive vector graphics."}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-17"]}>
          <div className={styles["default"]}>
            <div className={styles["div-18"]}>
              <div className={styles["div-19"]}>
                <img className={styles["img-4"]} src={slots[9] ?? "https://framerusercontent.com/images/xbN015pZ5m2f3mTXjZwy9lSR0L0.png?width=417&height=417"} alt="" />
              </div>
            </div>
            <div className={styles["text-wrapper"]}>
              <div className={styles["div-20"]}>
                <p className={styles["p-12"]}>{slots[10] ?? "Adobe Illustrator"}</p>
              </div>
              <div className={styles["div-21"]}>
                <p className={styles["p-13"]}>{slots[11] ?? "Illustration Design tool for creating"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-17"]}>
          <div className={styles["default"]}>
            <div className={styles["div-18"]}>
              <div className={styles["div-19"]}>
                <img className={styles["img-5"]} src={slots[12] ?? "https://framerusercontent.com/images/Tqdz4TW3BdEmCe8MorKTAWImZlc.png?width=200&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["text-wrapper"]}>
              <div className={styles["div-20"]}>
                <p className={styles["p-12"]}>{slots[13] ?? "Claude"}</p>
              </div>
              <div className={styles["div-21"]}>
                <p className={styles["p-13"]}>{slots[14] ?? "Build wireframes, user research, and test design ideas fast."}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-17"]}>
          <div className={styles["default"]}>
            <div className={styles["div-18"]}>
              <div className={styles["div-19"]}>
                <img className={styles["img-6"]} src={slots[15] ?? "https://framerusercontent.com/images/KY4xuc61Yyo77EuDtfYkHK7BHY.png?scale-down-to=512&width=1024&height=1024"} alt="" />
              </div>
            </div>
            <div className={styles["text-wrapper"]}>
              <div className={styles["div-20"]}>
                <p className={styles["p-12"]}>{slots[16] ?? "Cursor"}</p>
              </div>
              <div className={styles["div-21"]}>
                <p className={styles["p-13"]}>{slots[17] ?? "Write code, fix bugs, and build prototypes fast."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
