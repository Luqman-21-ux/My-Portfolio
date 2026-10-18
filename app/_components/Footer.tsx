import styles from "./styles.module.css"

export default function Footer({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-8"]}>
        <div className={styles["noise"]}>
          <div className={styles["div-67"]}>
            <img className={styles["img-11"]} src={slots[0] ?? "https://framerusercontent.com/images/WjZVYjfVNTdo9UKicX5AdploJGc.webp?width=1536&height=1536"} alt="" />
          </div>
        </div>
        <div className={styles["container-2"]}>
          <div className={styles["cta"]}>
            <div className={styles["div-68"]}>
              <div className={styles["div-69"]}>
                <img className={styles["img-12"]} src={slots[1] ?? "https://framerusercontent.com/images/gf0u4QlWkWyKQ0V6b90ZogjvkA.jpg?scale-down-to=1024&width=1728&height=2420"} alt="" />
              </div>
            </div>
            <div className={styles["div-70"]}>
              <h2 className={styles["h2"]}>
                <span className={styles["span-2"]}>{slots[2] ?? "Let's have a chat,"}</span>
                {"and I'll take care of the rest"}
              </h2>
            </div>
            <div className={styles["div-71"]}>
              <a className={styles["primary-inverse"]} href="https://cal.com/luqman-wxqdml/30min">
                <div className={styles["div-72"]}>
                  <p className={styles["p-34"]}>{slots[3] ?? "Book a Call"}</p>
                </div>
              </a>
            </div>
          </div>
          <div className={styles["footer-container"]}>
            <ul className={styles["nav-wrapper"]}>
              <li className={styles["main-nav"]}>
                <div className={styles["navigation"]}>
                  <div className={styles["div-73"]}>
                    <p className={styles["p-35"]}>{slots[4] ?? "Navigation"}</p>
                  </div>
                  <div className={styles["link-wrapper"]}>
                    <div className={styles["div-74"]}>
                      <div className={styles["p-36"]}>
                        <a className={styles["a"]} href="./">{slots[5] ?? "Home"}</a>
                      </div>
                    </div>
                    <div className={styles["div-75"]}>
                      <div className={styles["p-37"]}>
                        <a className={styles["a"]} href="./works">{slots[6] ?? "Works"}</a>
                      </div>
                    </div>
                    <div className={styles["div-76"]}>
                      <div className={styles["p-38"]}>
                        <a className={styles["a"]} href="./about">{slots[7] ?? "About"}</a>
                      </div>
                    </div>
                    <div className={styles["div-77"]}>
                      <div className={styles["p-39"]}>
                        <a className={styles["a"]} href="./contact">{slots[8] ?? "Contact"}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["navigation-2"]}>
                  <div className={styles["div-78"]}>
                    <p className={styles["p-40"]}>{slots[9] ?? "Connect"}</p>
                  </div>
                  <div className={styles["link-wrapper-2"]}>
                    <div className={styles["div-79"]}>
                      <div className={styles["p-41"]}>
                        <a className={styles["a"]} href="https://x.com/weloveluqman?s=11">{slots[10] ?? "X (Twitter)"}</a>
                      </div>
                    </div>
                    <div className={styles["div-80"]}>
                      <div className={styles["p-42"]}>
                        <a className={styles["a"]} href="https://www.instagram.com/weloveluqman?igsh=MW53YjcyNThubWo3aw%3D%3D&utm_source=qr">{slots[11] ?? "Instagram"}</a>
                      </div>
                    </div>
                    <div className={styles["div-81"]}>
                      <div className={styles["p-43"]}>
                        <a className={styles["a"]} href="https://www.linkedin.com/in/luqman-yusuff-8a2446255">{slots[12] ?? "Linkedin"}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className={styles["credit"]}>
              <div className={styles["div-82"]}>
                <p className={styles["p-44"]}>{slots[13] ?? "©Irise Studio 2026. All rights reserved."}</p>
              </div>
              <div className={styles["text-wrapper-4"]}>
                <div className={styles["div-83"]}>
                  <div className={styles["p-45"]}>
                    {"Made in "}
                    <a className={styles["a"]} href="https://framer.com?fpr=rosyid11">{slots[14] ?? "Framer"}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
