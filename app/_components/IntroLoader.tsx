"use client"

import { useEffect, useState } from "react"
import styles from "./styles.module.css"

const name = "Luqman Yusuff"

export default function IntroLoader() {
  const [displayedName, setDisplayedName] = useState("")
  const [isLeaving, setIsLeaving] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const timers: number[] = []

    document.body.style.overflow = "hidden"

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedName(name)
      timers.push(
        window.setTimeout(() => setIsLeaving(true), 500),
        window.setTimeout(() => setIsMounted(false), 700),
      )

      return () => {
        timers.forEach(window.clearTimeout)
        document.body.style.overflow = previousOverflow
      }
    }

    name.split("").forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          setDisplayedName(name.slice(0, index + 1))
        }, 500 + index * 105),
      )
    })

    const typingEndsAt = 500 + name.length * 105

    timers.push(
      window.setTimeout(() => setIsLeaving(true), typingEndsAt + 950),
      window.setTimeout(() => setIsMounted(false), typingEndsAt + 1650),
    )

    return () => {
      timers.forEach(window.clearTimeout)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    if (!isMounted) {
      document.body.style.overflow = ""
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div
      className={`${styles["intro-loader"]} ${isLeaving ? styles["intro-loader-leaving"] : ""}`}
      role="status"
      aria-label="Welcome to Luqman Yusuff"
    >
      <div className={styles["intro-grid"]} aria-hidden="true" />
      <div className={styles["intro-content"]}>
        <p className={styles["intro-eyebrow"]}>Welcome to</p>
        <h1 className={styles["intro-name"]} aria-hidden="true">
          <span>{displayedName}</span>
          <span className={styles["intro-cursor"]} />
        </h1>
        <div className={styles["sci-fi-loader"]} aria-hidden="true">
          <span className={styles["loader-track"]}>
            <span className={styles["loader-scan"]} />
          </span>
        </div>
      </div>
    </div>
  )
}
