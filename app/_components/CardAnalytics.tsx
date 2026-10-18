import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CardAnalytics({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-4"]}>
        <div className={styles["happy-client"]}>
          <div className={styles["div-23"]}>
            <div className={styles["p-14"]}>
              <span className={styles["span"]}>{slots[0] ?? "10+"}</span>
              {"happy clients"}
            </div>
          </div>
          <div className={styles["div-24"]}>
            <div className={styles["div-25"]}>
              <SvgGraphic className={styles["svg-2"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3)); color: var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3)); flex-shrink: 0;\" data-f2c-idx=\"233\"><g color=\"var(--token-f0f50c8d-8b39-455f-9890-55b410a8da5f, rgb(239, 206, 3))\" weight=\"fill\" data-f2c-idx=\"234\"><path d=\"M128,24a104,104,0,1,0,30.57,203.43,7.9,7.9,0,0,0,3.3-2l63.57-63.57a8,8,0,0,0,2-3.31A104.09,104.09,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z\" data-f2c-idx=\"235\"></path></g></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["experiences"]}>
          <div className={styles["div-23"]}>
            <div className={styles["p-14"]}>
              <span className={styles["span"]}>{slots[1] ?? "5+ years of experiences"}</span>
            </div>
          </div>
          <div className={styles["div-24"]}>
            <div className={styles["div-25"]}>
              <SvgGraphic className={styles["svg-3"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-59ba25ef-871d-47ed-831d-ddb52ca447ba, rgb(0, 192, 71))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-59ba25ef-871d-47ed-831d-ddb52ca447ba, rgb(0, 192, 71)); color: var(--token-59ba25ef-871d-47ed-831d-ddb52ca447ba, rgb(0, 192, 71)); flex-shrink: 0;\" data-f2c-idx=\"242\"><g color=\"var(--token-59ba25ef-871d-47ed-831d-ddb52ca447ba, rgb(0, 192, 71))\" weight=\"fill\" data-f2c-idx=\"243\"><path d=\"M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z\" data-f2c-idx=\"244\"></path></g></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["project"]}>
          <div className={styles["div-23"]}>
            <div className={styles["p-14"]}>
              <span className={styles["span"]}>{slots[2] ?? "12+"}</span>
              {"projects completed"}
            </div>
          </div>
          <div className={styles["div-24"]}>
            <div className={styles["div-25"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247)); color: var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247)); flex-shrink: 0;\" data-f2c-idx=\"251\"><g color=\"var(--token-0989c3d2-dec0-436d-861f-a51090f607b8, rgb(116, 48, 247))\" weight=\"fill\" data-f2c-idx=\"252\"><path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z\" data-f2c-idx=\"253\"></path></g></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["tag"]}>
          <div className={styles["image"]}>
            <div className={styles["div-26"]}>
              <div className={styles["div-27"]}>
                <img className={styles["img-7"]} src={slots[3] ?? "https://framerusercontent.com/images/gBnkhJ17BmtTHqpLjPkAeWdN8U.png?scale-down-to=1024&width=1856&height=2464"} alt="" />
              </div>
            </div>
            <div className={styles["div-28"]}>
              <div className={styles["div-27"]}>
                <img className={styles["img-8"]} src={slots[4] ?? "https://framerusercontent.com/images/zfmF1iFYDX2iAwx2tDdmHAHKsKY.png?scale-down-to=512&width=1024&height=1024"} alt="" />
              </div>
            </div>
            <div className={styles["div-29"]}>
              <div className={styles["div-27"]}>
                <img className={styles["img-8"]} src={slots[5] ?? "https://framerusercontent.com/images/7IFOWsHVY0RJFR1n6Chu0jDP1jA.png?scale-down-to=512&width=1024&height=1024"} alt="" />
              </div>
            </div>
            <div className={styles["div-30"]}>
              <div className={styles["div-27"]}>
                <img className={styles["img-8"]} src={slots[6] ?? "https://framerusercontent.com/images/nSJFnEeB2r1YM5Orpw7rRVinGQ.png?scale-down-to=512&width=1024&height=1024"} alt="" />
              </div>
            </div>
          </div>
          <div className={styles["div-31"]}>
            <p className={styles["p-15"]}>{slots[7] ?? "Trusted by many"}</p>
          </div>
        </div>
      </div>
  )
}
