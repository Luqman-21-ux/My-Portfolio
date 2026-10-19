import styles from "./styles.module.css"

export default function SectionMyStacks({ slots = [] }: { slots?: string[] }) {
  const tools = [
    { icon: slots[0] ?? "https://framerusercontent.com/images/Bhdea81oiDTPBPVoo8pCk45ReM.png?width=480&height=480", name: slots[1] ?? "Figma" },
    { icon: slots[3] ?? "https://framerusercontent.com/images/Nf63tXddU52SRtJJgRHqk7zzD2g.png?width=480&height=480", name: slots[4] ?? "Framer" },
    { icon: slots[6] ?? "https://framerusercontent.com/images/VCZMoMHexjx0t0rw5gr0T52rnU.png?width=400&height=300", name: slots[7] ?? "Rive" },
    { icon: slots[9] ?? "https://framerusercontent.com/images/xbN015pZ5m2f3mTXjZwy9lSR0L0.png?width=417&height=417", name: slots[10] ?? "Adobe Illustrator" },
    { icon: slots[12] ?? "https://framerusercontent.com/images/Tqdz4TW3BdEmCe8MorKTAWImZlc.png?width=200&height=200", name: slots[13] ?? "Claude" },
    { icon: slots[15] ?? "https://framerusercontent.com/images/KY4xuc61Yyo77EuDtfYkHK7BHY.png?scale-down-to=512&width=1024&height=1024", name: slots[16] ?? "Cursor" },
  ]

  return (
    <div className={styles["stack-marquee"]} aria-label="Design tools I use">
      <div className={styles["stack-track"]}>
        {[0, 1].map((copy) => (
          <div className={styles["stack-group"]} aria-hidden={copy === 1} key={copy}>
            {tools.map((tool) => (
              <div className={styles["stack-pill"]} key={`${copy}-${tool.name}`}>
                <img className={styles["stack-icon"]} src={tool.icon} alt="" />
                <span className={styles["stack-label"]}>{tool.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
