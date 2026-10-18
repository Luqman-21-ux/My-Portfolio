import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Phosphor({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-9"]}>
        <SvgGraphic className={styles["svg"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-2b90e070-5307-4bc4-9726-a1d7f0bc8735, rgb(31, 31, 31))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-2b90e070-5307-4bc4-9726-a1d7f0bc8735, rgb(31, 31, 31)); color: var(--token-2b90e070-5307-4bc4-9726-a1d7f0bc8735, rgb(31, 31, 31)); flex-shrink: 0;\" data-f2c-idx=\"75\"><g color=\"var(--token-2b90e070-5307-4bc4-9726-a1d7f0bc8735, rgb(31, 31, 31))\" weight=\"regular\" data-f2c-idx=\"76\"><path d=\"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z\" data-f2c-idx=\"77\"></path></g></svg>"} />
      </div>
  )
}
