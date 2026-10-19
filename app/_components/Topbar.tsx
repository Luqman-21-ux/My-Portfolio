import styles from "./styles.module.css"

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
]

export default function Topbar(_props: { slots?: string[] } = {}) {
  return (
    <nav className={styles["desktop"]} aria-label="Main navigation">
      <div className={`${styles["container"]} ${styles["topbar-layout"]}`}>
        <a className={styles["nav-logo"]} href="/#top" aria-label="Luqman Yusuff — back to top">
          <span>LY</span>
        </a>

        <div className={styles["nav-links"]}>
          {navigation.map((item) => (
            <a className={styles["nav-link"]} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
