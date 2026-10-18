import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CardServices({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["desktop-5"]}>
        <div className={styles["title"]}>
          <div className={styles["text-wrapper-2"]}>
            <div className={styles["div-32"]}>
              <p className={styles["p-16"]}>{slots[0] ?? "Interaction Design"}</p>
            </div>
            <div className={styles["div-32"]}>
              <p className={styles["p-16"]}>{slots[1] ?? "Start a Project"}</p>
            </div>
          </div>
          <div className={styles["icon"]}>
            <div className={styles["div-33"]}>
              <div className={styles["div-34"]}>
                <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3)); color: var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3)); flex-shrink: 0;\" data-f2c-idx=\"295\"><g color=\"var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3))\" weight=\"regular\" data-f2c-idx=\"296\"><path d=\"M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm88,116a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Zm56-72a56,56,0,1,0-56,56A56.06,56.06,0,0,0,184,128Zm-68-12a12,12,0,1,0-12,12A12,12,0,0,0,116,116Zm36-12a12,12,0,1,0,12,12A12,12,0,0,0,152,104Zm-5.29,42c-3.81,3.37-12,6-18.71,6s-14.9-2.63-18.71-6a8,8,0,1,0-10.58,12c7.83,6.91,20.35,10,29.29,10s21.46-3.09,29.29-10a8,8,0,1,0-10.58-12Z\" data-f2c-idx=\"297\"></path></g></svg>"} />
              </div>
            </div>
            <div className={styles["div-35"]}>
              <div className={styles["div-34"]}>
                <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3)); color: var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3)); flex-shrink: 0;\" data-f2c-idx=\"300\"><g color=\"var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3))\" weight=\"regular\" data-f2c-idx=\"301\"><path d=\"M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z\" data-f2c-idx=\"302\"></path></g></svg>"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["details"]}>
          <div className={styles["content-2"]}>
            <div className={styles["div-36"]}>
              <p className={styles["p-17"]}>{slots[2] ?? "A strong brand is more than just a logo—it’s the foundation of how your audience perceives you. I create cohesive and impactful brand identities that ensure consistency across all touchpoints"}</p>
            </div>
            <div className={styles["images"]}>
              <div className={styles["div-37"]}>
                <div className={styles["div-38"]}>
                  <img className={styles["img-9"]} src={slots[3] ?? "https://framerusercontent.com/images/Apn3sBixkwJLg7HNCViT7Ue25Ns.png?scale-down-to=512&width=10080&height=7168"} alt="" />
                </div>
              </div>
              <div className={styles["div-37"]}>
                <div className={styles["div-38"]}>
                  <img className={styles["img-9"]} src={slots[4] ?? "https://framerusercontent.com/images/AKA4q6jHb11tSrVRTZSJoAP7s.png?scale-down-to=512&width=10080&height=7168"} alt="" />
                </div>
              </div>
              <div className={styles["div-37"]}>
                <div className={styles["div-38"]}>
                  <img className={styles["img-9"]} src={slots[5] ?? "https://framerusercontent.com/images/3d0xvRIE250rLSao751Uxsal0.png?scale-down-to=512&width=10080&height=7168"} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["tags-2"]}>
            <div className={styles["div-39"]}>
              <div className={styles["filled"]}>
                <div className={styles["div-40"]}>
                  <p className={styles["p-18"]}>{slots[6] ?? "User flows"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-41"]}>
              <div className={styles["filled-2"]}>
                <div className={styles["div-42"]}>
                  <p className={styles["p-19"]}>{slots[7] ?? "Micro-interactions"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-43"]}>
              <div className={styles["filled-3"]}>
                <div className={styles["div-44"]}>
                  <p className={styles["p-20"]}>{slots[8] ?? "Prototyping"}</p>
                </div>
              </div>
            </div>
            <div className={styles["div-45"]}>
              <div className={styles["filled-4"]}>
                <div className={styles["div-46"]}>
                  <p className={styles["p-21"]}>{slots[9] ?? "+more"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
