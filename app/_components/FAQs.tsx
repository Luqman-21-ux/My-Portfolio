import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function FAQs({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-7"]}>
        <div className={styles["title-3"]}>
          <div className={styles["div-60"]}>
            <p className={styles["p-31"]}>{slots[0] ?? "I'm here to help you"}</p>
          </div>
        </div>
        <div className={styles["card-wrapper"]}>
          <div className={styles["div-61"]}>
            <div className={styles["desktop-opened"]}>
              <div className={styles["title-4"]}>
                <div className={styles["div-62"]}>
                  <p className={styles["p-32"]}>{slots[1] ?? "What kind of products have you designed?"}</p>
                </div>
                <div className={styles["div-63"]}>
                  <div className={styles["div-34"]}>
                    <SvgGraphic className={styles["svg-7"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); color: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); flex-shrink: 0;\" data-f2c-idx=\"538\"><g color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" weight=\"regular\" data-f2c-idx=\"539\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\" data-f2c-idx=\"540\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
              <div className={styles["div-64"]}>
                <p className={styles["p-33"]}>{slots[2] ?? "I have designed fintech products, SaaS platforms, AI-assisted experiences, dashboards, marketplaces, mobile apps, web apps, and admin tools. My work often involves complex flows, multiple user types, transaction-heavy experiences, and products that need clarity, trust, and strong usability."}</p>
              </div>
            </div>
          </div>
          <div className={styles["div-65"]}>
            <div className={styles["desktop-closed"]}>
              <div className={styles["title-4"]}>
                <div className={styles["div-62"]}>
                  <p className={styles["p-32"]}>{slots[3] ?? "How do you approach a new product problem?"}</p>
                </div>
                <div className={styles["div-66"]}>
                  <div className={styles["div-34"]}>
                    <SvgGraphic className={styles["svg-7"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); color: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); flex-shrink: 0;\" data-f2c-idx=\"550\"><g color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" weight=\"regular\" data-f2c-idx=\"551\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\" data-f2c-idx=\"552\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-65"]}>
            <div className={styles["desktop-closed"]}>
              <div className={styles["title-4"]}>
                <div className={styles["div-62"]}>
                  <p className={styles["p-32"]}>{slots[4] ?? "How do you collaborate with PMs and engineers?"}</p>
                </div>
                <div className={styles["div-66"]}>
                  <div className={styles["div-34"]}>
                    <SvgGraphic className={styles["svg-7"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); color: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); flex-shrink: 0;\" data-f2c-idx=\"560\"><g color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" weight=\"regular\" data-f2c-idx=\"561\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\" data-f2c-idx=\"562\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-65"]}>
            <div className={styles["desktop-closed"]}>
              <div className={styles["title-4"]}>
                <div className={styles["div-62"]}>
                  <p className={styles["p-32"]}>{slots[5] ?? "How do you measure the success of your designs?"}</p>
                </div>
                <div className={styles["div-66"]}>
                  <div className={styles["div-34"]}>
                    <SvgGraphic className={styles["svg-7"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); color: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); flex-shrink: 0;\" data-f2c-idx=\"570\"><g color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" weight=\"regular\" data-f2c-idx=\"571\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\" data-f2c-idx=\"572\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-65"]}>
            <div className={styles["desktop-closed"]}>
              <div className={styles["title-4"]}>
                <div className={styles["div-62"]}>
                  <p className={styles["p-32"]}>{slots[6] ?? "What is your strength as a product designer?"}</p>
                </div>
                <div className={styles["div-66"]}>
                  <div className={styles["div-34"]}>
                    <SvgGraphic className={styles["svg-7"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); color: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); flex-shrink: 0;\" data-f2c-idx=\"580\"><g color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" weight=\"regular\" data-f2c-idx=\"581\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\" data-f2c-idx=\"582\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-65"]}>
            <div className={styles["desktop-closed"]}>
              <div className={styles["title-4"]}>
                <div className={styles["div-62"]}>
                  <p className={styles["p-32"]}>{slots[7] ?? "Do you work with design systems?"}</p>
                </div>
                <div className={styles["div-66"]}>
                  <div className={styles["div-34"]}>
                    <SvgGraphic className={styles["svg-7"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); color: var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127)); flex-shrink: 0;\" data-f2c-idx=\"590\"><g color=\"var(--token-923661f6-bb67-400f-9b15-4dbe77975e9c, rgb(113, 118, 127))\" weight=\"regular\" data-f2c-idx=\"591\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\" data-f2c-idx=\"592\"></path></g></svg>"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
