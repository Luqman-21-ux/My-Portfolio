import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CardServices2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-prominent"]}>
        <div className={styles["title-2"]}>
          <div className={styles["text-wrapper-3"]}>
            <div className={styles["div-47"]}>
              <p className={styles["p-22"]}>{slots[0] ?? "UI/UX Design"}</p>
            </div>
            <div className={styles["div-47"]}>
              <p className={styles["p-22"]}>{slots[1] ?? "Start a Project"}</p>
            </div>
          </div>
          <div className={styles["icon-2"]}>
            <div className={styles["div-33"]}>
              <div className={styles["div-34"]}>
                <SvgGraphic className={styles["svg-6"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247)); color: var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247)); flex-shrink: 0;\" data-f2c-idx=\"346\"><g color=\"var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247))\" weight=\"regular\" data-f2c-idx=\"347\"><path d=\"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z\" data-f2c-idx=\"348\"></path></g></svg>"} />
              </div>
            </div>
            <div className={styles["div-35"]}>
              <div className={styles["div-34"]}>
                <SvgGraphic className={styles["svg-6"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247)); color: var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247)); flex-shrink: 0;\" data-f2c-idx=\"351\"><g color=\"var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247))\" weight=\"regular\" data-f2c-idx=\"352\"><path d=\"M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z\" data-f2c-idx=\"353\"></path></g></svg>"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["details-2"]}>
          <div className={styles["content-3"]}>
            <div className={styles["div-48"]}>
              <p className={styles["p-23"]}>{slots[2] ?? "I create user-centred interfaces that balance strategy, usability, and visual polish. From research and wireframes to high-fidelity designs and design systems, I craft digital experiences that are simple, engaging, and built to perform."}</p>
            </div>
            <div className={styles["images-2"]}>
              <div className={styles["div-37"]}>
                <div className={styles["div-38"]}>
                  <img className={styles["img-9"]} src={slots[3] ?? "https://framerusercontent.com/images/X72tHNlZF5IgFfWEYGjmM1odik.png?scale-down-to=512&width=10080&height=7168"} alt="" />
                </div>
              </div>
              <div className={styles["div-49"]}>
                <div className={styles["div-50"]}>
                  <img className={styles["img-10"]} src={slots[4] ?? "https://framerusercontent.com/images/eTBjpfu8JhiZuwMY52xmCCRSUE.png?scale-down-to=512&width=10080&height=7168"} alt="" />
                </div>
              </div>
              <div className={styles["div-37"]}>
                <div className={styles["div-38"]}>
                  <img className={styles["img-9"]} src={slots[5] ?? "https://framerusercontent.com/images/njyY7LLJRDfNw5hWUuTCE7DXF4.png?scale-down-to=512&width=10080&height=7168"} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["tags-3"]}>
            <div className={styles["div-51"]}>
              <div className={styles["outlined-3"]}>
                <div className={styles["div-52"]}>
                  <p className={styles["p-24"]}>{slots[6] ?? "Web & app design"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-53"]}>
              <div className={styles["outlined-4"]}>
                <div className={styles["div-54"]}>
                  <p className={styles["p-25"]}>{slots[7] ?? "Design system"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-55"]}>
              <div className={styles["outlined-5"]}>
                <div className={styles["div-56"]}>
                  <p className={styles["p-26"]}>{slots[8] ?? "Prototyping"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-45"]}>
              <div className={styles["outlined-6"]}>
                <div className={styles["div-46"]}>
                  <p className={styles["p-27"]}>{slots[9] ?? "+more"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
