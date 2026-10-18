import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function IconButton({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["filled-5"]} href="../works">
        <div className={styles["div-85"]}>
          <div className={styles["div-9"]}>
            <SvgGraphic className={styles["svg-8"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-404da5a0-b6b9-407a-b3f1-b45132783493, rgb(17, 17, 17))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-404da5a0-b6b9-407a-b3f1-b45132783493, rgb(17, 17, 17)); color: var(--token-404da5a0-b6b9-407a-b3f1-b45132783493, rgb(17, 17, 17)); flex-shrink: 0;\" data-f2c-idx=\"64\"><g color=\"var(--token-404da5a0-b6b9-407a-b3f1-b45132783493, rgb(17, 17, 17))\" weight=\"regular\" data-f2c-idx=\"65\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\" data-f2c-idx=\"66\"></path></g></svg>"} />
          </div>
        </div>
      </a>
  )
}
